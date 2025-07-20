---
layout: default
title: API 参考
---

# API 参考

本页面提供了 Francis Component React 组件库的完整 API 参考。

## 组件列表

### 布局组件

- [FlexibleContainer](#flexiblecontainer) - 灵活的容器组件

### 数据展示组件

- [TagEllipsis](#tagellipsis) - 标签省略组件

### 交互组件

- [ContextMenu](#contextmenu) - 右键菜单组件

---

## FlexibleContainer

灵活的容器组件，支持多种布局方向和样式。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| direction | `'horizontal' \| 'vertical'` | `'horizontal'` | 布局方向 |
| className | `string` | - | 自定义类名 |
| style | `React.CSSProperties` | - | 自定义样式 |
| children | `React.ReactNode` | - | 子元素 |

### 示例

```tsx
import { FlexibleContainer } from 'francis-component-react';

<FlexibleContainer direction="vertical">
  <div>内容1</div>
  <div>内容2</div>
</FlexibleContainer>
```

---

## TagEllipsis

标签省略组件，当标签数量超过限制时自动省略显示。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| maxTag | `number` | `3` | 最大显示标签数量 |
| responsive | `boolean` | `false` | 是否响应式 |
| className | `string` | - | 自定义类名 |
| style | `React.CSSProperties` | - | 自定义样式 |
| children | `React.ReactNode` | - | 标签元素 |
| onExpand | `() => void` | - | 展开回调 |
| onCollapse | `() => void` | - | 收起回调 |

### 示例

```tsx
import { TagEllipsis } from 'francis-component-react';

<TagEllipsis maxTag={3} responsive>
  <span>标签1</span>
  <span>标签2</span>
  <span>标签3</span>
  <span>标签4</span>
  <span>标签5</span>
</TagEllipsis>
```

---

## ContextMenu

右键菜单组件，支持多级菜单和自定义样式。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| items | `MenuItem[]` | `[]` | 菜单项配置 |
| trigger | `'contextmenu' \| 'click'` | `'contextmenu'` | 触发方式 |
| className | `string` | - | 自定义类名 |
| style | `React.CSSProperties` | - | 自定义样式 |
| children | `React.ReactNode` | - | 触发元素 |
| onSelect | `(key: string, item: MenuItem) => void` | - | 选择回调 |
| onVisibleChange | `(visible: boolean) => void` | - | 显示状态变化回调 |

### MenuItem 接口

```tsx
interface MenuItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: MenuItem[];
  onClick?: (item: MenuItem) => void;
}
```

### 示例

```tsx
import { ContextMenu } from 'francis-component-react';

const items = [
  {
    key: 'copy',
    label: '复制',
    icon: <CopyIcon />
  },
  {
    key: 'paste',
    label: '粘贴',
    icon: <PasteIcon />
  },
  {
    key: 'more',
    label: '更多',
    children: [
      { key: 'delete', label: '删除' },
      { key: 'rename', label: '重命名' }
    ]
  }
];

<ContextMenu items={items} onSelect={(key) => console.log(key)}>
  <div>右键点击这里</div>
</ContextMenu>
```

## 通用属性

所有组件都支持以下通用属性：

### 样式属性

| 属性 | 类型 | 说明 |
|------|------|------|
| className | `string` | 自定义 CSS 类名 |
| style | `React.CSSProperties` | 内联样式对象 |

### 事件属性

大部分组件支持标准的 React 事件属性，如 `onClick`、`onMouseEnter` 等。

## TypeScript 支持

所有组件都提供完整的 TypeScript 类型定义。你可以导入类型来获得更好的开发体验：

```tsx
import type { 
  FlexibleContainerProps,
  TagEllipsisProps,
  ContextMenuProps,
  MenuItem 
} from 'francis-component-react';
```

## CSS 变量

组件库使用 CSS 变量来支持主题定制：

```css
:root {
  /* 主色调 */
  --fc-primary-color: #1890ff;
  --fc-primary-color-hover: #40a9ff;
  --fc-primary-color-active: #096dd9;
  
  /* 文本颜色 */
  --fc-text-color: #000000d9;
  --fc-text-color-secondary: #00000073;
  --fc-text-color-disabled: #00000040;
  
  /* 背景颜色 */
  --fc-background-color: #ffffff;
  --fc-background-color-light: #fafafa;
  
  /* 边框 */
  --fc-border-color: #d9d9d9;
  --fc-border-radius: 6px;
  
  /* 阴影 */
  --fc-box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12);
  
  /* 字体 */
  --fc-font-size: 14px;
  --fc-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  
  /* 间距 */
  --fc-padding-xs: 4px;
  --fc-padding-sm: 8px;
  --fc-padding-md: 12px;
  --fc-padding-lg: 16px;
  --fc-padding-xl: 24px;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | >= 60 |
| Firefox | >= 60 |
| Safari | >= 12 |
| Edge | >= 79 |
| IE | 不支持 |

## 更新日志

查看 [CHANGELOG.md](https://github.com/your-username/francis-component-react/blob/main/CHANGELOG.md) 了解版本更新信息。