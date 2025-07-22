import React, { CSSProperties, ReactNode, useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import styles from './style.module.less';

export interface ContextMenuItem {
  key: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  divider?: boolean;
  children?: ContextMenuItem[];
  onClick?: (item: ContextMenuItem) => void;
}

/**
 * @title ContextMenu 右键菜单
 */
export interface ContextMenuProps {
  /** 触发右键菜单的子元素 */
  children: ReactNode;
  /** 菜单项配置 */
  items: ContextMenuItem[];
  /** 自定义样式 */
  style?: CSSProperties;
  /** 菜单容器样式 */
  menuStyle?: CSSProperties;
  /** 点击外部是否隐藏菜单 */
  blurToHide?: boolean;
  /** 菜单项点击回调 */
  onItemClick?: (item: ContextMenuItem) => void;
  /** 菜单显示状态变化回调 */
  onVisibleChange?: (visible: boolean) => void;
}

const ContextMenu = (props: ContextMenuProps) => {
  const {
    children,
    items,
    style,
    menuStyle,
    blurToHide = true,
    onItemClick,
    onVisibleChange,
  } = props;
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
      onVisibleChange?.(true);
    },
    [onVisibleChange]
  );

  const handleItemClick = useCallback(
    (item: ContextMenuItem) => {
      if (!item.disabled) {
        onItemClick?.(item);
        setVisible(false);
        onVisibleChange?.(false);
      }
    },
    [onItemClick, onVisibleChange]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && blurToHide) {
        setVisible(false);
      }
    };

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onVisibleChange]);

  const renderMenuItem = (item: ContextMenuItem, level = 0) => {
    if (item.divider) {
      return <div key={item.key} className={styles['context-menu-divider']} />;
    }

    const hasChildren = item.children && item.children.length > 0;
    const isHovered = hoveredItem === item.key;

    return (
      <div key={item.key} className="context-menu-item-wrapper">
        <div
          className={clsx(styles['context-menu-item'], `${item.disabled ? 'disabled' : ''}`)}
          style={{
            cursor: item.disabled ? 'not-allowed' : 'pointer',
            backgroundColor: isHovered && !item.disabled ? '#f5f5f5' : 'transparent',
            color: item.disabled ? '#ccc' : '#333',
          }}
          onClick={() => handleItemClick(item)}
          onMouseEnter={() => setHoveredItem(item.key)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {item.icon && <span>{item.icon}</span>}
            <span>{item.label}</span>
          </div>
          {item.children && <span style={{ fontSize: '12px', color: '#999' }}>▶</span>}
        </div>
        {hasChildren && isHovered && (
          <div className={styles['context-menu-submenu']}>
            {item.children!.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const menuElement = visible ? (
    <div
      ref={menuRef}
      className={styles['context-menu']}
      style={{
        left: position.x,
        top: position.y,
        ...menuStyle,
      }}
    >
      {items.map((item) => renderMenuItem(item))}
    </div>
  ) : null;

  return (
    <>
      <div
        ref={containerRef}
        style={{ display: 'inline-block', ...style }}
        onContextMenu={handleContextMenu}
      >
        {children}
      </div>
      {menuElement && createPortal(menuElement, document.body)}
    </>
  );
};

export default ContextMenu;
