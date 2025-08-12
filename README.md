# Francis Component React

[![npm version](https://badge.fury.io/js/francis-component-react.svg)](https://badge.fury.io/js/francis-component-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

基于 [Arco Design](https://arco.design/) 组件库的 React 组件库，用于扩充 Arco Design 组件库的功能。

## ✨ 特性

- 🎨 基于 Arco Design 设计语言
- 📦 开箱即用的高质量 React 组件
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件
- 📖 完整的 Storybook 文档
- 🎯 支持按需加载
- 🌍 国际化语言支持

## 📦 安装

```bash
# npm
npm install francis-component-react

# yarn
yarn add francis-component-react

# pnpm
pnpm add francis-component-react
```

## 🔨 使用

```tsx
import React from 'react';
import { Container, TagEllipsis, AsyncButton, TooltipButton } from 'francis-component-react';

function App() {
  const handleAsyncClick = async () => {
    // 模拟异步操作
    await new Promise(resolve => setTimeout(resolve, 2000));
  };

  return (
    <Container direction="vertical">
      <TagEllipsis maxTag={3}>
        <span>标签1</span>
        <span>标签2</span>
        <span>标签3</span>
        <span>标签4</span>
      </TagEllipsis>
      
      <AsyncButton onClick={handleAsyncClick} type="primary">
        异步按钮
      </AsyncButton>
      
      <TooltipButton tooltip="这是一个带提示的按钮" placement="top">
        提示按钮
      </TooltipButton>
    </Container>
  );
}

export default App;
```

## 📚 组件列表

### 布局组件

- **FlexibleContainer** - 灵活的容器组件
  - `Container` - 基础容器
  - `ContainerFixed` - 固定尺寸容器
  - `ContainerShrink` - 可收缩容器

### 数据展示

- **TagEllipsis** - 标签省略组件，支持响应式显示和省略
- **TextEllipsis** - 文本省略组件，支持单行和多行文本省略

### 交互组件

- **ContextMenu** - 右键菜单组件
- **AsyncButton** - 异步按钮组件，支持异步操作时自动显示加载状态
- **TooltipButton** - 带提示的按钮组件，基于 Arco Design 的 Tooltip 组件

## 🔗 链接

- [🎨 Storybook 演示](https://component-react-smoky.vercel.app/) (需要部署后更新)
- [🐛 报告问题](https://github.com/francisxihe/francis-component-react/issues)

## 🤝 参与贡献

我们欢迎所有的贡献。

你可以将任何想法作为 [Pull Request](https://github.com/francisxihe/francis-component-react/pulls) 或 [GitHub Issue](https://github.com/francisxihe/francis-component-react/issues) 提交。

## 🛠 开发

### 环境要求

- Node.js >= 16
- pnpm >= 7

### 本地开发

```bash
# 克隆项目
git clone https://github.com/francisxihe/francis-component-react.git

# 进入项目目录
cd francis-component-react

# 安装依赖
pnpm install

# 启动 Storybook 开发服务器
pnpm dev:storybook

# 构建组件库
pnpm build

# 运行测试
pnpm test

# 代码格式化
pnpm format

# 代码检查
pnpm eslint
```

### 添加新组件

```bash
# 使用脚本创建新组件
pnpm add:component -- YourComponentName
```

### 项目结构

```
francis-component-react/
├── components/          # 组件源码
│   ├── ComponentName/
│   │   ├── index.tsx   # 组件主文件
│   │   ├── style/      # 组件样式
│   │   ├── demo/       # 组件示例
│   │   └── __test__/   # 组件测试
│   └── index.tsx       # 组件导出
├── stories/            # Storybook 文档
├── types/             # TypeScript 类型定义
└── tests/             # 测试配置
```

## 📄 许可证

[MIT](./LICENSE)

## 🙏 致谢

感谢 [Arco Design](https://arco.design/) 团队提供的优秀设计系统和组件库。
