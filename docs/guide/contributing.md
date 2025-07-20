---
layout: default
title: 贡献指南
---

# 贡献指南

感谢你对 Francis Component React 的关注！我们欢迎任何形式的贡献，包括但不限于：

- 🐛 报告 Bug
- 💡 提出新功能建议
- 📝 改进文档
- 🔧 提交代码修复
- ✨ 开发新组件

## 开始之前

在开始贡献之前，请确保你已经：

1. 阅读了 [快速开始](./getting-started.md) 和 [组件开发指南](./component-development.md)
2. 了解项目的代码规范和架构
3. 搜索了现有的 Issues 和 Pull Requests，避免重复工作

## 报告 Bug

如果你发现了 Bug，请通过 GitHub Issues 报告。在报告时，请提供：

### Bug 报告模板

```markdown
## Bug 描述
简要描述遇到的问题

## 复现步骤
1. 进入页面 '...'
2. 点击 '...'
3. 滚动到 '...'
4. 看到错误

## 期望行为
描述你期望发生的行为

## 实际行为
描述实际发生的行为

## 环境信息
- OS: [e.g. macOS 12.0]
- Browser: [e.g. Chrome 95.0]
- Node.js: [e.g. 16.14.0]
- React: [e.g. 18.2.0]
- francis-component-react: [e.g. 1.0.0]

## 截图
如果适用，请添加截图来帮助解释问题

## 附加信息
添加任何其他相关信息
```

## 功能建议

我们欢迎新功能建议！在提交建议前，请考虑：

1. 这个功能是否符合组件库的定位
2. 是否有足够的使用场景
3. 是否与现有功能冲突

### 功能建议模板

```markdown
## 功能描述
简要描述建议的功能

## 使用场景
描述什么情况下会用到这个功能

## 解决方案
描述你期望的解决方案

## 替代方案
描述你考虑过的其他解决方案

## 附加信息
添加任何其他相关信息、截图或示例
```

## 代码贡献

### 开发流程

1. **Fork 项目**
   ```bash
   # 在 GitHub 上 Fork 项目到你的账户
   git clone https://github.com/your-username/francis-component-react.git
   cd francis-component-react
   ```

2. **创建分支**
   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   ```

3. **安装依赖**
   ```bash
   pnpm install
   ```

4. **开发和测试**
   ```bash
   # 启动开发服务器
   pnpm dev
   
   # 运行测试
   pnpm test
   
   # 代码检查
   pnpm lint
   ```

5. **提交代码**
   ```bash
   git add .
   git commit -m "feat: add new component"
   git push origin feature/your-feature-name
   ```

6. **创建 Pull Request**
   - 在 GitHub 上创建 Pull Request
   - 填写 PR 模板
   - 等待代码审查

### 提交信息规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### 类型说明

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式调整（不影响功能）
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动
- `perf`: 性能优化
- `ci`: CI/CD 相关

#### 示例

```bash
# 新功能
git commit -m "feat(TagEllipsis): add responsive support"

# Bug 修复
git commit -m "fix(ContextMenu): fix menu position calculation"

# 文档更新
git commit -m "docs: update component API documentation"

# 重大变更
git commit -m "feat!: change component API structure"
```

### 代码规范

#### TypeScript

- 使用 TypeScript 编写所有代码
- 提供完整的类型定义
- 使用 JSDoc 注释

```tsx
/**
 * @title ComponentName 组件标题
 * @description 组件描述
 */
export interface ComponentProps {
  /**
   * @zh 属性的中文描述
   * @en Property description in English
   * @defaultValue 'default'
   */
  prop?: string;
}
```

#### 样式

- 使用 CSS Modules
- 遵循 BEM 命名规范
- 支持主题定制

```less
.component {
  // 基础样式
  
  &__element {
    // 元素样式
  }
  
  &--modifier {
    // 修饰符样式
  }
}
```

#### 测试

- 为新功能编写单元测试
- 测试覆盖率不低于 80%
- 包含边界情况测试

```tsx
describe('Component', () => {
  it('should render correctly', () => {
    // 基础渲染测试
  });
  
  it('should handle props correctly', () => {
    // 属性处理测试
  });
  
  it('should handle edge cases', () => {
    // 边界情况测试
  });
});
```

### Pull Request 规范

#### PR 标题

使用与提交信息相同的规范：

```
feat(Component): add new feature
fix(Component): fix specific issue
docs: update documentation
```

#### PR 描述模板

```markdown
## 变更类型
- [ ] Bug 修复
- [ ] 新功能
- [ ] 重大变更
- [ ] 文档更新
- [ ] 代码重构
- [ ] 性能优化
- [ ] 测试相关

## 变更描述
简要描述这次变更的内容

## 相关 Issue
- Closes #123
- Fixes #456

## 测试
- [ ] 单元测试通过
- [ ] 集成测试通过
- [ ] 手动测试通过

## 截图
如果有 UI 变更，请提供截图

## 检查清单
- [ ] 代码遵循项目规范
- [ ] 已添加必要的测试
- [ ] 已更新相关文档
- [ ] 已测试在不同浏览器中的兼容性
- [ ] 已考虑无障碍访问
```

## 代码审查

所有 Pull Request 都需要经过代码审查：

1. **自动检查**
   - CI/CD 流水线检查
   - 代码质量检查
   - 测试覆盖率检查

2. **人工审查**
   - 代码质量和规范
   - 功能实现正确性
   - 测试完整性
   - 文档完整性

3. **审查标准**
   - 代码可读性和可维护性
   - 性能影响
   - 安全性考虑
   - 向后兼容性

## 发布流程

1. **版本规划**
   - 主版本：重大变更，可能不向后兼容
   - 次版本：新功能，向后兼容
   - 修订版本：Bug 修复，向后兼容

2. **发布准备**
   - 更新版本号
   - 更新 CHANGELOG
   - 更新文档
   - 运行完整测试

3. **发布执行**
   - 创建 Release Tag
   - 发布到 npm
   - 更新 GitHub Pages
   - 发布公告

## 社区行为准则

我们致力于为每个人提供友好、安全和欢迎的环境。请遵循以下准则：

1. **尊重他人**
   - 使用友好和包容的语言
   - 尊重不同的观点和经验
   - 优雅地接受建设性批评

2. **专业行为**
   - 专注于对社区最有利的事情
   - 对其他社区成员表现出同理心
   - 避免人身攻击和骚扰

3. **建设性参与**
   - 提供有用的反馈
   - 帮助新贡献者
   - 分享知识和经验

## 获得帮助

如果你在贡献过程中遇到问题，可以通过以下方式获得帮助：

- 📧 发送邮件到 [your-email@example.com]
- 💬 在 GitHub Discussions 中提问
- 🐛 在 GitHub Issues 中报告问题
- 📖 查看项目文档和 FAQ

## 致谢

感谢所有为项目做出贡献的开发者！你们的努力让这个项目变得更好。

---

再次感谢你的贡献！🎉