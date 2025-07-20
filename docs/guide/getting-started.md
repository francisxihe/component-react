---
layout: default
title: 快速开始
---

# 快速开始

本指南将帮助你快速上手 Francis Component React 组件库。

## 环境要求

- Node.js >= 16
- React >= 18
- TypeScript >= 4.1 (推荐)

## 安装

### 使用 npm

```bash
npm install francis-component-react
```

### 使用 yarn

```bash
yarn add francis-component-react
```

### 使用 pnpm

```bash
pnpm add francis-component-react
```

## 基础使用

### 1. 导入组件

```tsx
import React from 'react';
import { Container, TagEllipsis, ContextMenu } from 'francis-component-react';
```

### 2. 使用组件

```tsx
function App() {
  return (
    <div className="app">
      <Container direction="vertical">
        <h1>Francis Component React 示例</h1>
        
        <TagEllipsis maxTag={3}>
          <span>标签1</span>
          <span>标签2</span>
          <span>标签3</span>
          <span>标签4</span>
        </TagEllipsis>
        
        <ContextMenu items={[
          { key: 'copy', label: '复制' },
          { key: 'paste', label: '粘贴' }
        ]}>
          <div>右键点击这里</div>
        </ContextMenu>
      </Container>
    </div>
  );
}

export default App;
```

## TypeScript 支持

组件库完全使用 TypeScript 开发，提供完整的类型定义。

```tsx
import { ContainerProps, TagEllipsisProps } from 'francis-component-react';

// 使用类型定义
const containerProps: ContainerProps = {
  direction: 'horizontal',
  className: 'my-container'
};

const tagProps: TagEllipsisProps = {
  maxTag: 5,
  responsive: true
};
```

## 样式引入

### 全量引入

如果你的项目支持 CSS Modules 或者使用了相应的构建工具，样式会自动引入。

### 按需引入

```tsx
// 只引入需要的组件
import { Container } from 'francis-component-react';
```

## 主题定制

组件库基于 Arco Design，你可以通过 CSS 变量或者 Less 变量来定制主题。

```css
:root {
  --primary-color: #1890ff;
  --border-radius: 4px;
  --font-size: 14px;
}
```

## 浏览器兼容性

- Chrome >= 60
- Firefox >= 60
- Safari >= 12
- Edge >= 79

## 下一步

- 查看 [组件文档](../components/index.md) 了解所有可用组件
- 阅读 [组件开发指南](./component-development.md) 学习如何开发自定义组件
- 参考 [Storybook 演示](https://your-storybook-url.com) 查看交互示例

## 常见问题

### Q: 如何解决样式冲突？

A: 组件使用 CSS Modules，样式是局部作用域的，不会产生全局污染。如果遇到样式问题，请检查是否正确引入了样式文件。

### Q: 是否支持服务端渲染 (SSR)？

A: 是的，所有组件都支持 SSR，包括 Next.js 等框架。

### Q: 如何获得更好的 TypeScript 体验？

A: 确保你的 TypeScript 版本 >= 4.1，并在 tsconfig.json 中启用严格模式。

```json
{
  "compilerOptions": {
    "strict": true,
    "skipLibCheck": true
  }
}
```