---
layout: default
title: 示例展示
---

# 示例展示

这里展示了 Francis Component React 组件库中所有组件的使用示例。

## FlexibleContainer 示例

### 水平布局

```tsx
import { FlexibleContainer } from 'francis-component-react';

function HorizontalExample() {
  return (
    <FlexibleContainer direction="horizontal">
      <div style={{ padding: '20px', background: '#f0f0f0', margin: '5px' }}>
        内容 1
      </div>
      <div style={{ padding: '20px', background: '#e0e0e0', margin: '5px' }}>
        内容 2
      </div>
      <div style={{ padding: '20px', background: '#d0d0d0', margin: '5px' }}>
        内容 3
      </div>
    </FlexibleContainer>
  );
}
```

### 垂直布局

```tsx
import { FlexibleContainer } from 'francis-component-react';

function VerticalExample() {
  return (
    <FlexibleContainer direction="vertical">
      <div style={{ padding: '20px', background: '#f0f0f0', margin: '5px' }}>
        内容 1
      </div>
      <div style={{ padding: '20px', background: '#e0e0e0', margin: '5px' }}>
        内容 2
      </div>
      <div style={{ padding: '20px', background: '#d0d0d0', margin: '5px' }}>
        内容 3
      </div>
    </FlexibleContainer>
  );
}
```

## TagEllipsis 示例

### 基础用法

```tsx
import { TagEllipsis } from 'francis-component-react';

function BasicTagExample() {
  return (
    <TagEllipsis maxTag={3}>
      <span style={{ 
        padding: '4px 8px', 
        background: '#1890ff', 
        color: 'white', 
        borderRadius: '4px',
        margin: '2px'
      }}>
        React
      </span>
      <span style={{ 
        padding: '4px 8px', 
        background: '#52c41a', 
        color: 'white', 
        borderRadius: '4px',
        margin: '2px'
      }}>
        TypeScript
      </span>
      <span style={{ 
        padding: '4px 8px', 
        background: '#fa8c16', 
        color: 'white', 
        borderRadius: '4px',
        margin: '2px'
      }}>
        JavaScript
      </span>
      <span style={{ 
        padding: '4px 8px', 
        background: '#eb2f96', 
        color: 'white', 
        borderRadius: '4px',
        margin: '2px'
      }}>
        CSS
      </span>
      <span style={{ 
        padding: '4px 8px', 
        background: '#722ed1', 
        color: 'white', 
        borderRadius: '4px',
        margin: '2px'
      }}>
        HTML
      </span>
    </TagEllipsis>
  );
}
```

### 响应式标签

```tsx
import { TagEllipsis } from 'francis-component-react';

function ResponsiveTagExample() {
  return (
    <TagEllipsis maxTag={4} responsive>
      <span className="tag">前端开发</span>
      <span className="tag">React</span>
      <span className="tag">Vue.js</span>
      <span className="tag">Angular</span>
      <span className="tag">Node.js</span>
      <span className="tag">Express</span>
      <span className="tag">MongoDB</span>
      <span className="tag">MySQL</span>
    </TagEllipsis>
  );
}
```

## ContextMenu 示例

### 基础右键菜单

```tsx
import { ContextMenu } from 'francis-component-react';
import { CopyOutlined, PasteOutlined, DeleteOutlined } from '@ant-design/icons';

function BasicContextMenuExample() {
  const menuItems = [
    {
      key: 'copy',
      label: '复制',
      icon: <CopyOutlined />
    },
    {
      key: 'paste',
      label: '粘贴',
      icon: <PasteOutlined />
    },
    {
      key: 'delete',
      label: '删除',
      icon: <DeleteOutlined />,
      onClick: () => console.log('删除操作')
    }
  ];

  return (
    <ContextMenu 
      items={menuItems}
      onSelect={(key) => console.log('选择了:', key)}
    >
      <div style={{
        width: '200px',
        height: '100px',
        border: '2px dashed #d9d9d9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}>
        右键点击这里
      </div>
    </ContextMenu>
  );
}
```

### 多级菜单

```tsx
import { ContextMenu } from 'francis-component-react';

function NestedContextMenuExample() {
  const menuItems = [
    {
      key: 'file',
      label: '文件',
      children: [
        { key: 'new', label: '新建' },
        { key: 'open', label: '打开' },
        { key: 'save', label: '保存' }
      ]
    },
    {
      key: 'edit',
      label: '编辑',
      children: [
        { key: 'cut', label: '剪切' },
        { key: 'copy', label: '复制' },
        { key: 'paste', label: '粘贴' }
      ]
    },
    {
      key: 'view',
      label: '查看',
      children: [
        { key: 'zoom-in', label: '放大' },
        { key: 'zoom-out', label: '缩小' },
        { key: 'fullscreen', label: '全屏' }
      ]
    }
  ];

  return (
    <ContextMenu items={menuItems}>
      <div style={{
        width: '300px',
        height: '150px',
        border: '1px solid #d9d9d9',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fafafa'
      }}>
        右键查看多级菜单
      </div>
    </ContextMenu>
  );
}
```

### 点击触发菜单

```tsx
import { ContextMenu } from 'francis-component-react';

function ClickContextMenuExample() {
  const menuItems = [
    { key: 'profile', label: '个人资料' },
    { key: 'settings', label: '设置' },
    { key: 'logout', label: '退出登录' }
  ];

  return (
    <ContextMenu items={menuItems} trigger="click">
      <button style={{
        padding: '8px 16px',
        border: '1px solid #d9d9d9',
        borderRadius: '6px',
        background: '#fff',
        cursor: 'pointer'
      }}>
        点击显示菜单
      </button>
    </ContextMenu>
  );
}
```

## 组合使用示例

### 完整的应用示例

```tsx
import React from 'react';
import { 
  FlexibleContainer, 
  TagEllipsis, 
  ContextMenu 
} from 'francis-component-react';

function CompleteExample() {
  const contextMenuItems = [
    { key: 'edit', label: '编辑' },
    { key: 'delete', label: '删除' },
    { key: 'share', label: '分享' }
  ];

  return (
    <FlexibleContainer direction="vertical" style={{ padding: '20px' }}>
      <h2>项目管理面板</h2>
      
      <FlexibleContainer direction="horizontal" style={{ gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h3>项目信息</h3>
          <p>项目名称: Francis Component React</p>
          <p>创建时间: 2024-01-01</p>
          
          <h4>技术栈</h4>
          <TagEllipsis maxTag={3} responsive>
            <span className="tech-tag">React</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Less</span>
            <span className="tech-tag">Storybook</span>
            <span className="tech-tag">Jest</span>
            <span className="tech-tag">ESLint</span>
          </TagEllipsis>
        </div>
        
        <ContextMenu items={contextMenuItems}>
          <div style={{
            width: '200px',
            height: '150px',
            border: '1px solid #d9d9d9',
            borderRadius: '8px',
            padding: '16px',
            background: '#f9f9f9'
          }}>
            <h4>操作面板</h4>
            <p>右键查看更多操作</p>
          </div>
        </ContextMenu>
      </FlexibleContainer>
    </FlexibleContainer>
  );
}
```

## 样式定制示例

### 自定义主题

```css
/* 自定义 CSS 变量 */
:root {
  --fc-primary-color: #722ed1;
  --fc-border-radius: 8px;
  --fc-font-size: 16px;
}

/* 自定义标签样式 */
.tech-tag {
  display: inline-block;
  padding: 4px 12px;
  margin: 2px;
  background: linear-gradient(45deg, #1890ff, #52c41a);
  color: white;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
}

/* 自定义容器样式 */
.custom-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

## 在线演示

你可以在以下平台查看这些示例的在线演示：

- [Storybook 演示](../storybook/) - 交互式组件文档
- [CodeSandbox 示例](https://codesandbox.io/s/francis-component-react-examples) - 在线代码编辑器
- [GitHub Pages](https://your-username.github.io/francis-component-react/) - 完整文档站点

## 更多示例

如果你想查看更多示例或贡献新的示例，请访问：

- [GitHub 仓库](https://github.com/your-username/francis-component-react/tree/main/examples)
- [示例目录](https://github.com/your-username/francis-component-react/tree/main/stories)
- [测试用例](https://github.com/your-username/francis-component-react/tree/main/components/__test__)