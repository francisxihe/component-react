---
layout: default
title: TagEllipsis 标签省略组件
---

# TagEllipsis 标签省略组件

标签省略组件，支持响应式显示和省略功能，当标签数量超过限制时自动显示省略号。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| maxTag | `number` | - | 最大显示标签数量 |
| responsive | `boolean` | `false` | 是否启用响应式模式 |
| className | `string` | - | 自定义类名 |
| children | `React.ReactNode` | - | 标签子元素 |

## 使用示例

### 基础用法

```tsx
import { TagEllipsis } from 'francis-component-react';

<TagEllipsis maxTag={3}>
  <span>标签1</span>
  <span>标签2</span>
  <span>标签3</span>
  <span>标签4</span>
  <span>标签5</span>
</TagEllipsis>
```

### 响应式模式

在响应式模式下，组件会根据容器宽度自动调整显示的标签数量。

```tsx
<TagEllipsis responsive>
  <span>响应式标签1</span>
  <span>响应式标签2</span>
  <span>响应式标签3</span>
  <span>响应式标签4</span>
  <span>响应式标签5</span>
</TagEllipsis>
```

### 自定义样式

```tsx
<TagEllipsis 
  maxTag={2} 
  className="custom-tag-container"
>
  <span className="custom-tag">自定义标签1</span>
  <span className="custom-tag">自定义标签2</span>
  <span className="custom-tag">自定义标签3</span>
</TagEllipsis>
```

### 长标签名称处理

组件能够很好地处理长标签名称的显示。

```tsx
<TagEllipsis maxTag={2}>
  <span>这是一个很长的标签名称示例</span>
  <span>另一个长标签名称</span>
  <span>第三个标签</span>
</TagEllipsis>
```

## 特性

### 1. 固定数量模式
- 通过 `maxTag` 属性设置最大显示标签数
- 超出数量的标签会被省略，显示 "+N" 的形式

### 2. 响应式模式
- 启用 `responsive` 属性后，组件会监听容器宽度变化
- 自动计算能够显示的标签数量
- 适应不同屏幕尺寸和容器大小

### 3. 省略显示
- 当标签数量超过限制时，显示省略指示器
- 省略指示器显示被隐藏的标签数量
- 支持自定义省略样式

## 样式定制

组件提供了灵活的样式定制选项：

```css
/* 自定义容器样式 */
.custom-tag-container {
  padding: 8px;
  background: #f5f5f5;
  border-radius: 4px;
}

/* 自定义标签样式 */
.custom-tag {
  background: #1890ff;
  color: white;
  padding: 4px 8px;
  border-radius: 2px;
  margin-right: 4px;
}
```

## 注意事项

1. **子元素要求**：子元素应该是可渲染的 React 节点
2. **响应式性能**：响应式模式会监听窗口大小变化，在大量实例时注意性能
3. **样式继承**：组件会保持子元素的原有样式
4. **无障碍访问**：组件支持键盘导航和屏幕阅读器

## 最佳实践

1. **合理设置 maxTag**：根据设计需求和容器大小设置合适的最大标签数
2. **响应式使用场景**：在容器大小不确定的场景下使用响应式模式
3. **样式一致性**：保持标签样式的一致性，提供良好的用户体验
4. **性能优化**：避免在响应式模式下频繁更新子元素