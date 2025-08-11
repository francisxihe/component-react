import React from 'react';
import { Button, Tooltip } from '@arco-design/web-react';
import type { ButtonProps } from '@arco-design/web-react';
import clsx from 'clsx';
import styles from './style.module.less';

export interface TooltipButtonProps extends ButtonProps {
  /** tooltip显示的文字内容 */
  tooltip?: string;
  /** tooltip位置 */
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'tl' | 'tr' | 'bl' | 'br';
}

/**
 * @title TooltipButton 带提示的按钮
 * @description 基于arco-design的Tooltip和Button组件，鼠标悬停时显示tooltip文字内容
 */
const TooltipButton: React.FC<TooltipButtonProps> = (props) => {
  const { tooltip, placement = 'top', className, children, ...restProps } = props;

  // 如果没有tooltip内容，直接返回Button
  if (!tooltip) {
    return (
      <Button {...restProps} className={clsx(styles['tooltip-button'], className)}>
        {children}
      </Button>
    );
  }

  return (
    <Tooltip content={tooltip} position={placement}>
      <Button {...restProps} className={clsx(styles['tooltip-button'], className)}>
        {children}
      </Button>
    </Tooltip>
  );
};

export default TooltipButton;
