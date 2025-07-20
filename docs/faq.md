---
layout: default
title: 常见问题
---

# 常见问题 (FAQ)

这里收集了使用 Francis Component React 组件库时的常见问题和解决方案。

## 安装和配置

### Q: 如何安装组件库？

A: 你可以使用 npm、yarn 或 pnpm 来安装：

```bash
# npm
npm install francis-component-react

# yarn
yarn add francis-component-react

# pnpm
pnpm add francis-component-react
```

### Q: 是否需要额外安装依赖？

A: 组件库的 peerDependencies 包括：
- React >= 18.0.0
- React DOM >= 18.0.0

确保你的项目中已经安装了这些依赖。

### Q: 如何在 TypeScript 项目中使用？

A: 组件库完全支持 TypeScript，包含完整的类型定义。只需正常导入即可：

```tsx
import { FlexibleContainer, TagEllipsis } from 'francis-component-react';
import type { FlexibleContainerProps } from 'francis-component-react';
```

## 样式和主题

### Q: 样式没有生效怎么办？

A: 请检查以下几点：

1. 确保你的构建工具支持 CSS Modules
2. 检查是否有样式冲突
3. 确认组件的 className 是否正确应用

### Q: 如何自定义组件样式？

A: 有几种方式可以自定义样式：

1. **通过 className 属性**：
```tsx
<FlexibleContainer className="my-custom-class">
  {/* 内容 */}
</FlexibleContainer>
```

2. **通过 style 属性**：
```tsx
<FlexibleContainer style={{ backgroundColor: '#f0f0f0' }}>
  {/* 内容 */}
</FlexibleContainer>
```

3. **通过 CSS 变量**：
```css
:root {
  --fc-primary-color: #1890ff;
  --fc-border-radius: 6px;
}
```

### Q: 如何覆盖组件的默认样式？

A: 由于使用了 CSS Modules，你需要使用更高的特异性或 `!important`：

```css
.my-container :global(.flexible-container) {
  background-color: red !important;
}
```

## 组件使用

### Q: FlexibleContainer 组件如何设置间距？

A: 你可以通过 CSS 样式来设置间距：

```tsx
<FlexibleContainer 
  direction="horizontal" 
  style={{ gap: '16px' }}
>
  {/* 子元素 */}
</FlexibleContainer>
```

### Q: TagEllipsis 组件如何自定义省略提示？

A: 目前组件会自动显示省略的标签数量。如果需要自定义，可以通过监听 `onExpand` 和 `onCollapse` 事件来实现自定义逻辑。

### Q: ContextMenu 组件如何禁用某个菜单项？

A: 在菜单项配置中设置 `disabled: true`：

```tsx
const items = [
  { key: 'copy', label: '复制' },
  { key: 'paste', label: '粘贴', disabled: true },
  { key: 'delete', label: '删除' }
];
```

### Q: 如何在 ContextMenu 中添加分割线？

A: 目前版本不直接支持分割线，但你可以通过自定义样式来实现：

```tsx
const items = [
  { key: 'copy', label: '复制' },
  { key: 'divider', label: '', disabled: true, className: 'menu-divider' },
  { key: 'delete', label: '删除' }
];
```

## 性能优化

### Q: 如何优化大量标签的 TagEllipsis 性能？

A: 几个建议：

1. 启用 `responsive` 属性
2. 合理设置 `maxTag` 值
3. 使用 `React.memo` 包装标签组件
4. 避免在渲染函数中创建新对象

```tsx
const MemoizedTag = React.memo(({ children }) => (
  <span className="tag">{children}</span>
));

<TagEllipsis maxTag={5} responsive>
  {tags.map(tag => (
    <MemoizedTag key={tag.id}>{tag.name}</MemoizedTag>
  ))}
</TagEllipsis>
```

### Q: ContextMenu 在大量元素上使用会影响性能吗？

A: 组件内部已经做了优化，但如果有大量元素，建议：

1. 使用事件委托
2. 延迟加载菜单项
3. 避免在每个元素上都绑定 ContextMenu

## 兼容性

### Q: 支持哪些浏览器？

A: 组件库支持以下浏览器：
- Chrome >= 60
- Firefox >= 60
- Safari >= 12
- Edge >= 79
- 不支持 IE

### Q: 是否支持服务端渲染 (SSR)？

A: 是的，所有组件都支持 SSR，包括 Next.js、Nuxt.js 等框架。

### Q: 在 Next.js 中使用时出现样式问题怎么办？

A: 确保在 `next.config.js` 中正确配置 CSS Modules：

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cssModules: true
  }
};

module.exports = nextConfig;
```

## 开发和调试

### Q: 如何在开发环境中调试组件？

A: 几种方式：

1. 使用 React Developer Tools
2. 启用 Storybook：`pnpm dev`
3. 查看组件的 props 和 state
4. 使用浏览器的开发者工具检查 DOM 结构

### Q: 如何贡献代码或报告 Bug？

A: 请查看我们的 [贡献指南](./guide/contributing.md)，或者：

1. 在 GitHub 上提交 Issue
2. Fork 项目并提交 Pull Request
3. 参与 GitHub Discussions

### Q: 如何请求新功能？

A: 你可以：

1. 在 GitHub Issues 中提交功能请求
2. 详细描述使用场景和期望的 API
3. 如果可能，提供设计稿或示例代码

## 错误处理

### Q: 遇到 "Module not found" 错误怎么办？

A: 检查以下几点：

1. 确认组件库已正确安装
2. 检查导入路径是否正确
3. 确认组件名称拼写正确
4. 重新安装依赖：`rm -rf node_modules && npm install`

### Q: TypeScript 类型错误如何解决？

A: 常见解决方案：

1. 确保 TypeScript 版本 >= 4.1
2. 检查 `tsconfig.json` 配置
3. 重启 TypeScript 服务
4. 清除 TypeScript 缓存

### Q: 样式不生效的常见原因？

A: 可能的原因：

1. CSS Modules 配置问题
2. 样式优先级被覆盖
3. 构建工具配置错误
4. 浏览器缓存问题

## 更新和迁移

### Q: 如何升级到新版本？

A: 升级步骤：

1. 查看 [更新日志](https://github.com/your-username/francis-component-react/blob/main/CHANGELOG.md)
2. 更新依赖：`npm update francis-component-react`
3. 检查是否有破坏性变更
4. 运行测试确保功能正常

### Q: 版本兼容性如何？

A: 我们遵循 [语义化版本](https://semver.org/)：

- 主版本：包含破坏性变更
- 次版本：新功能，向后兼容
- 修订版本：Bug 修复，向后兼容

## 获取帮助

如果你的问题没有在这里找到答案，可以通过以下方式获取帮助：

- 📧 发送邮件到 [your-email@example.com]
- 💬 在 [GitHub Discussions](https://github.com/your-username/francis-component-react/discussions) 中提问
- 🐛 在 [GitHub Issues](https://github.com/your-username/francis-component-react/issues) 中报告问题
- 📖 查看 [完整文档](./index.md)

---

*如果你发现了新的常见问题，欢迎通过 Pull Request 来完善这个 FAQ！*