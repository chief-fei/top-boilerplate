# Top Boilerplate

一个现代化的 VSCode 扩展开发模板，使用 Vite 作为构建工具，支持快速创建 React 和 Vue 组件。

## 特性

- 🚀 使用 Vite 进行快速构建
- 📦 使用 pnpm 作为包管理器
- 📦 使用 plop 作为组件模板引擎
- 🎯 TypeScript 支持
- 🔍 ESLint 和 Prettier 代码规范
- 🧪 测试支持
- 📝 完整的开发文档
- ⚡ 快速创建 React/Vue 组件
- 🎨 支持自定义组件模板
- 🔒 Git 提交检查 (Husky + lint-staged)

## 快速开始

### 前置要求

- Node.js 22+
- pnpm 10.8.0+
- VSCode 1.90.0+

### 安装

```bash
# 克隆仓库
git clone https://github.com/chief-fei/top-boilerplate.git

# 进入项目目录
cd top-boilerplate

# 安装依赖
pnpm install
```

### 开发

```bash
# 启动开发模式
pnpm run dev

# 构建扩展
pnpm run build

# 打包扩展
vsce package
```

## 项目结构

```
.
├── src/                    # 源代码目录
│   ├── extension.ts        # 扩展入口文件
│   ├── templates/          # 组件模板
│   │   ├── react/         # React 组件模板
│   │   └── vue/           # Vue 组件模板
│   ├── utils/             # 工具函数
│   │   ├── createComponent.ts  # 组件创建逻辑
│   │   └── index.ts       # 工具函数入口
│   └── test/              # 测试文件
├── .vscode/               # VSCode 配置
├── out/                   # 构建输出目录
├── vite.config.ts         # Vite 配置
└── package.json           # 项目配置
```

## 功能说明

### 组件创建

- 支持快速创建 React 组件
- 支持快速创建 Vue 组件
- 提供默认组件模板
- 支持自定义组件模板

### 开发工具链

- Vite 构建工具
- TypeScript 支持
- ESLint + Prettier 代码规范
- Husky + lint-staged Git 提交检查
- VS Code 测试框架

## 配置说明

### Vite 配置

项目使用 Vite 作为构建工具，配置文件位于 `vite.config.ts`。主要配置包括：

- 输出目录设置
- 构建优化
- 开发服务器配置

### ESLint 配置

代码规范检查使用 ESLint，配置文件位于 `eslint.config.mjs`。

## 发布扩展

1. 更新 `package.json` 中的版本号
2. 运行 `pnpm run package` 构建扩展
3. 使用 VSCode 扩展发布工具发布

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情
