---
layout: default
title: Francis Component React
description: 基于 Arco Design 的 React 组件库
---

# Francis Component React

基于 [Arco Design](https://arco.design/) 组件库的 React 组件库，用于扩充 Arco Design 组件库的功能。

## 快速开始

### 安装

```bash
npm install francis-component-react
```

### 使用

```tsx
import React from 'react';
import { Container, TagEllipsis } from 'francis-component-react';

function App() {
  return (
    <Container direction="vertical">
      <TagEllipsis maxTag={3}>
        <span>标签1</span>
        <span>标签2</span>
        <span>标签3</span>
        <span>标签4</span>
      </TagEllipsis>
    </Container>
  );
}
```

## 组件文档

- [FlexibleContainer 容器组件](./components/flexible-container.md)
- [TagEllipsis 标签省略组件](./components/tag-ellipsis.md)
- [ContextMenu 右键菜单组件](./components/context-menu.md)

## 开发指南

- [快速开始](./guide/getting-started.md) - 快速上手组件库
- [组件文档](./components/index.md) - 查看所有可用组件
- [示例展示](./examples/index.md) - 查看组件使用示例
- [API 参考](./api/index.md) - 完整的 API 文档
- [常见问题](./faq.md) - 解决常见使用问题
- [组件开发](./guide/component-development.md) - 学习如何开发新组件
- [贡献指南](./guide/contributing.md) - 参与项目贡献

## 链接

- [GitHub 仓库](https://github.com/your-username/francis-component-react)
- [NPM 包](https://www.npmjs.com/package/francis-component-react)
- [Storybook 演示](https://your-storybook-url.com)