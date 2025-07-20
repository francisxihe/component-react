---
layout: default
title: 组件开发指南
---

# 组件开发指南

本指南将帮助你了解如何在 Francis Component React 中开发新组件。

## 开发环境搭建

### 1. 克隆项目

```bash
git clone https://github.com/your-username/francis-component-react.git
cd francis-component-react
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 启动开发服务器

```bash
pnpm dev
```

这将启动 Storybook 开发服务器，你可以在 http://localhost:6006 查看组件文档。

## 创建新组件

### 1. 使用脚本创建

```bash
pnpm add:component -- YourComponentName
```

这将创建以下文件结构：

```
components/YourComponentName/
├── index.tsx          # 组件主文件
├── style/            # 样式文件
│   ├── index.less
│   └── index.ts
├── demo/             # 示例文件
│   └── index.js
├── __test__/         # 测试文件
│   ├── index.test.tsx
│   └── demo.test.tsx
└── TEMPLATE.md       # 文档模板
```

### 2. 手动创建组件

如果你更喜欢手动创建，可以按照以下步骤：

#### 创建组件文件

```tsx
// components/YourComponent/index.tsx
import React from 'react';
import clsx from 'clsx';
import styles from './style/index.module.less';

export interface YourComponentProps {
  /**
   * @zh 组件类名
   * @en Component className
   */
  className?: string;
  /**
   * @zh 子元素
   * @en Children elements
   */
  children?: React.ReactNode;
}

/**
 * @title YourComponent
 */
const YourComponent: React.FC<YourComponentProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <div 
      className={clsx(styles['your-component'], className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default YourComponent;
```

#### 创建样式文件

```less
// components/YourComponent/style/index.less
.your-component {
  // 组件样式
}
```

```typescript
// components/YourComponent/style/index.ts
import './index.less';
```

#### 更新导出文件

```tsx
// components/index.tsx
export { default as YourComponent } from './YourComponent';
```

## 组件开发规范

### 1. TypeScript 类型定义

- 所有组件必须提供完整的 TypeScript 类型定义
- 使用 JSDoc 注释为属性添加中英文说明
- 导出组件的 Props 接口

```tsx
export interface ComponentProps {
  /**
   * @zh 属性的中文描述
   * @en Property description in English
   * @defaultValue 'default'
   */
  prop?: string;
}
```

### 2. 样式规范

- 使用 CSS Modules 进行样式管理
- 遵循 BEM 命名规范
- 支持主题定制

```less
.component {
  &__element {
    // 元素样式
  }
  
  &--modifier {
    // 修饰符样式
  }
}
```

### 3. 组件结构

- 使用函数组件和 Hooks
- 支持 ref 转发（如需要）
- 处理边界情况

```tsx
const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  (props, ref) => {
    // 组件逻辑
    return <div ref={ref}>...</div>;
  }
);

Component.displayName = 'Component';
```

## 编写测试

### 1. 单元测试

```tsx
// __test__/index.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import YourComponent from '../index';

describe('YourComponent', () => {
  it('should render correctly', () => {
    render(<YourComponent>Test Content</YourComponent>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(
      <YourComponent className="custom-class">Test</YourComponent>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
```

### 2. 快照测试

```tsx
// __test__/demo.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import { Basic } from '../demo';

describe('YourComponent Demo', () => {
  it('should match snapshot', () => {
    const { container } = render(<Basic />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

## 编写文档

### 1. Storybook Stories

```tsx
// stories/YourComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from '../components';

const meta: Meta<typeof YourComponent> = {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // 属性控制器配置
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Basic Example',
  },
};
```

### 2. Demo 示例

```javascript
// demo/index.js
/**
 * @file
 * @title YourComponent
 * @memberOf 组件分类
 * @description 组件描述
 * @author 作者名
 */

/**
 * @title 基础用法
 * @description 组件的基本使用方式
 */
export { default as Basic } from './basic';
```

```tsx
// demo/basic.tsx
import React from 'react';
import { YourComponent } from 'francis-component-react';

export default function Basic() {
  return (
    <YourComponent>
      基础示例
    </YourComponent>
  );
}
```

## 代码质量

### 1. 代码检查

```bash
# ESLint 检查
pnpm eslint

# 样式检查
pnpm stylelint

# 格式化代码
pnpm format
```

### 2. 提交前检查

项目配置了 Husky 和 lint-staged，会在提交前自动运行：

- ESLint 检查
- 样式检查
- 单元测试
- 代码格式化

## 发布流程

### 1. 版本管理

```bash
# 更新版本号
npm version patch|minor|major
```

### 2. 构建和发布

```bash
# 构建组件库
pnpm build

# 发布到 npm
npm publish
```

## 最佳实践

1. **组件设计原则**
   - 单一职责：每个组件只做一件事
   - 可复用性：设计通用的 API
   - 可扩展性：支持自定义和扩展

2. **性能优化**
   - 使用 React.memo 避免不必要的重渲染
   - 合理使用 useMemo 和 useCallback
   - 避免在渲染函数中创建对象

3. **无障碍访问**
   - 添加适当的 ARIA 属性
   - 支持键盘导航
   - 提供语义化的 HTML 结构

4. **国际化支持**
   - 避免硬编码文本
   - 支持 RTL 布局
   - 考虑不同语言的文本长度