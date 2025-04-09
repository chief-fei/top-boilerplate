# Top Boilerplate

一个现代化的 VSCode 扩展开发模板，使用 Vite 作为构建工具。

## 特性

- 🚀 使用 Vite 进行快速构建
- 📦 使用 pnpm 作为包管理器
- 🎯 TypeScript 支持
- 🔍 ESLint 代码检查
- �� 测试支持
- 📝 完整的开发文档
- 🌐 ESM 支持 (使用 ES 模块)

## 快速开始

### 前置要求

- Node.js 18+
- pnpm 8+

### 安装

```bash
# 克隆仓库
git clone https://github.com/your-username/top-boilerplate.git

# 进入项目目录
cd top-boilerplate

# 安装依赖
pnpm install
```

### 开发

```bash
# 启动开发模式
pnpm run dev

# 运行测试
pnpm run test

# 构建扩展
pnpm run compile

# 打包扩展
pnpm run package
```

## 项目结构

```
.
├── src/                # 源代码目录
│   ├── extension.ts    # 扩展入口文件
│   └── test/          # 测试文件
├── .vscode/           # VSCode 配置
├── out/               # 构建输出目录
├── vite.config.ts     # Vite 配置
└── package.json       # 项目配置
```

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
