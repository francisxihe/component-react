---
layout: default
title: ContextMenu 右键菜单组件
---

# ContextMenu 右键菜单组件

右键菜单组件，提供丰富的交互功能，支持多级菜单、自定义菜单项和键盘导航。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| items | `MenuItem[]` | `[]` | 菜单项配置 |
| trigger | `'contextMenu' \| 'click'` | `'contextMenu'` | 触发方式 |
| className | `string` | - | 自定义类名 |
| children | `React.ReactNode` | - | 触发区域内容 |

## MenuItem 接口

```typescript
interface MenuItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  divider?: boolean;
  children?: MenuItem[];
  onClick?: (item: MenuItem) => void;
}
```

## 使用示例

### 基础用法

```tsx
import { ContextMenu } from 'francis-component-react';

const menuItems = [
  {
    key: 'copy',
    label: '复制',
    onClick: () => console.log('复制')
  },
  {
    key: 'paste',
    label: '粘贴',
    onClick: () => console.log('粘贴')
  },
  {
    key: 'divider1',
    divider: true
  },
  {
    key: 'delete',
    label: '删除',
    disabled: true
  }
];

<ContextMenu items={menuItems}>
  <div>右键点击这里显示菜单</div>
</ContextMenu>
```

### 带图标的菜单

```tsx
import { ContextMenu } from 'francis-component-react';
import { CopyOutlined, DeleteOutlined } from '@ant-design/icons';

const menuItems = [
  {
    key: 'copy',
    label: '复制',
    icon: <CopyOutlined />,
    onClick: () => console.log('复制')
  },
  {
    key: 'delete',
    label: '删除',
    icon: <DeleteOutlined />,
    onClick: () => console.log('删除')
  }
];

<ContextMenu items={menuItems}>
  <div>右键点击显示带图标的菜单</div>
</ContextMenu>
```

### 多级菜单

```tsx
const menuItems = [
  {
    key: 'edit',
    label: '编辑',
    children: [
      {
        key: 'copy',
        label: '复制',
        onClick: () => console.log('复制')
      },
      {
        key: 'cut',
        label: '剪切',
        onClick: () => console.log('剪切')
      },
      {
        key: 'paste',
        label: '粘贴',
        onClick: () => console.log('粘贴')
      }
    ]
  },
  {
    key: 'view',
    label: '查看',
    children: [
      {
        key: 'preview',
        label: '预览',
        onClick: () => console.log('预览')
      },
      {
        key: 'fullscreen',
        label: '全屏',
        onClick: () => console.log('全屏')
      }
    ]
  }
];

<ContextMenu items={menuItems}>
  <div>右键点击显示多级菜单</div>
</ContextMenu>
```

### 点击触发

```tsx
<ContextMenu items={menuItems} trigger="click">
  <button>点击显示菜单</button>
</ContextMenu>
```

### 自定义样式

```tsx
<ContextMenu 
  items={menuItems} 
  className="custom-context-menu"
>
  <div className="trigger-area">
    自定义样式的右键菜单
  </div>
</ContextMenu>
```

## 特性

### 1. 多种触发方式
- **右键触发**：默认的右键菜单行为
- **点击触发**：通过点击触发菜单显示

### 2. 丰富的菜单项类型
- **普通菜单项**：带有标签和点击事件
- **带图标菜单项**：支持自定义图标
- **禁用菜单项**：不可点击的菜单项
- **分割线**：用于分组菜单项
- **子菜单**：支持多级嵌套菜单

### 3. 键盘导航
- 支持方向键导航
- 支持 Enter 键选择
- 支持 Esc 键关闭菜单

### 4. 智能定位
- 自动检测边界，避免菜单超出视窗
- 支持多级菜单的智能定位

## 样式定制

```css
/* 自定义菜单容器 */
.custom-context-menu {
  /* 触发区域样式 */
}

/* 自定义菜单项样式 */
.custom-context-menu .menu-item {
  padding: 8px 12px;
  font-size: 14px;
}

/* 自定义悬停效果 */
.custom-context-menu .menu-item:hover {
  background-color: #f0f0f0;
}

/* 自定义禁用状态 */
.custom-context-menu .menu-item.disabled {
  color: #ccc;
  cursor: not-allowed;
}
```

## 事件处理

```tsx
const handleMenuClick = (item: MenuItem) => {
  console.log('点击了菜单项:', item.key);
  // 处理菜单项点击逻辑
};

const menuItems = [
  {
    key: 'action1',
    label: '操作1',
    onClick: handleMenuClick
  },
  {
    key: 'action2',
    label: '操作2',
    onClick: handleMenuClick
  }
];
```

## 注意事项

1. **菜单项唯一性**：确保每个菜单项的 `key` 值唯一
2. **事件冒泡**：菜单点击事件会自动阻止冒泡
3. **性能考虑**：避免在菜单项中使用复杂的渲染逻辑
4. **无障碍访问**：组件已内置键盘导航和 ARIA 属性支持

## 最佳实践

1. **合理分组**：使用分割线对相关功能进行分组
2. **图标一致性**：保持图标风格的一致性
3. **禁用状态**：合理使用禁用状态提供用户反馈
4. **菜单层级**：避免过深的菜单嵌套，建议不超过3级