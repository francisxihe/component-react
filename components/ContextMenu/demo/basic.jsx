import React from 'react';
import { ContextMenu } from '123';

const menuItems = [
  {
    key: 'copy',
    label: '复制',
    icon: '📋',
    onClick: (item) => console.log('点击了:', item.label),
  },
  {
    key: 'paste',
    label: '粘贴',
    icon: '📄',
    onClick: (item) => console.log('点击了:', item.label),
  },
  {
    key: 'divider1',
    divider: true,
  },
  {
    key: 'edit',
    label: '编辑',
    icon: '✏️',
    children: [
      {
        key: 'rename',
        label: '重命名',
        onClick: (item) => console.log('点击了:', item.label),
      },
      {
        key: 'duplicate',
        label: '复制副本',
        onClick: (item) => console.log('点击了:', item.label),
      },
    ],
  },
  {
    key: 'delete',
    label: '删除',
    icon: '🗑️',
    onClick: (item) => console.log('点击了:', item.label),
  },
  {
    key: 'divider2',
    divider: true,
  },
  {
    key: 'disabled',
    label: '禁用项',
    icon: '🚫',
    disabled: true,
    onClick: (item) => console.log('点击了:', item.label),
  },
];

export default () => {
  return (
    <div style={{ padding: '20px' }}>
      <ContextMenu
        items={menuItems}
        onItemClick={(item) => {
          console.log('菜单项被点击:', item);
        }}
        onVisibleChange={(visible) => {
          console.log('菜单显示状态:', visible);
        }}
      >
        <div
          style={{
            width: '200px',
            height: '100px',
            border: '2px dashed #ccc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          右键点击这里
        </div>
      </ContextMenu>
    </div>
  );
};

export default BasicDemo;}
