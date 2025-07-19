import React from 'react';
import { ContextMenu } from '../components';

const menuItems = [
  {
    key: 'copy',
    label: '复制',
    icon: '📋',
    onClick: (item) => alert(`点击了: ${item.label}`),
  },
  {
    key: 'paste',
    label: '粘贴',
    icon: '📄',
    onClick: (item) => alert(`点击了: ${item.label}`),
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
        onClick: (item) => alert(`点击了: ${item.label}`),
      },
      {
        key: 'duplicate',
        label: '复制副本',
        onClick: (item) => alert(`点击了: ${item.label}`),
      },
    ],
  },
  {
    key: 'delete',
    label: '删除',
    icon: '🗑️',
    onClick: (item) => alert(`点击了: ${item.label}`),
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
    onClick: (item) => alert(`点击了: ${item.label}`),
  },
];

export default {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    items: {
      description: '菜单项配置',
    },
    onItemClick: {
      description: '菜单项点击回调',
    },
    onVisibleChange: {
      description: '菜单显示状态变化回调',
    },
  },
};

export const Basic = {
  args: {
    items: menuItems,
    onItemClick: (item) => {
      alert(`菜单项被点击: ${item.label}`);
    },
    onVisibleChange: (visible) => {
      alert(`菜单显示状态: ${visible ? '显示' : '隐藏'}`);
    },
    children: (
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
    ),
  },
};

export const WithCustomStyle = {
  args: {
    items: menuItems.slice(0, 3),
    menuStyle: {
      backgroundColor: '#f0f8ff',
      border: '2px solid #4169e1',
    },
    children: (
      <div
        style={{
          width: '150px',
          height: '80px',
          border: '2px solid #4169e1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0f8ff',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        自定义样式菜单
      </div>
    ),
  },
};
