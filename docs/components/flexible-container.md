---
layout: default
title: FlexibleContainer 容器组件
---

# FlexibleContainer 容器组件

灵活的容器组件，提供多种布局方式，适用于各种页面布局场景。

## 组件列表

### Container
基础容器组件，支持水平和垂直布局。

#### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| direction | `'vertical' \| 'horizontal'` | `'horizontal'` | 布局方向 |
| className | `string` | - | 自定义类名 |
| children | `React.ReactNode` | - | 子元素 |

#### 使用示例

```tsx
import { Container } from 'francis-component-react';

// 水平布局
<Container direction="horizontal">
  <div>左侧内容</div>
  <div>右侧内容</div>
</Container>

// 垂直布局
<Container direction="vertical">
  <div>顶部内容</div>
  <div>底部内容</div>
</Container>
```

### ContainerFixed
固定尺寸容器组件，适用于需要固定宽度或高度的场景。

#### Props

继承 `Container` 的所有属性。

#### 使用示例

```tsx
import { ContainerFixed } from 'francis-component-react';

<ContainerFixed direction="horizontal">
  <div>固定尺寸的内容</div>
</ContainerFixed>
```

### ContainerShrink
可收缩容器组件，支持内容溢出时的滚动处理。

#### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| absolute | `boolean` | `false` | 是否使用绝对定位 |
| overflowY | `'hidden' \| 'auto'` | - | 垂直滚动行为 |

继承 `Container` 的所有其他属性。

#### 使用示例

```tsx
import { ContainerShrink } from 'francis-component-react';

// 基础用法
<ContainerShrink direction="vertical" overflowY="auto">
  <div>可滚动的长内容...</div>
</ContainerShrink>

// 绝对定位模式
<ContainerShrink absolute direction="vertical" overflowY="auto">
  <div>绝对定位的可滚动内容...</div>
</ContainerShrink>
```

## 样式说明

组件使用 CSS Modules 进行样式管理，提供以下 CSS 类：

- `.container` - 基础容器样式
- `.container-vertical` - 垂直布局样式
- `.container-horizontal` - 水平布局样式
- `.container-fixed` - 固定尺寸样式
- `.container-shrink` - 可收缩样式

## 注意事项

1. `ContainerShrink` 在 `absolute` 模式下会创建一个相对定位的包装器
2. 所有容器组件都支持标准的 HTML div 属性
3. 建议在使用时根据实际需求选择合适的容器类型