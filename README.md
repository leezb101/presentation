# Presentation Project

基于 Lit 框架的演示项目，通过 GitHub Actions 自动部署到 GitHub Pages。

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build

# 预览构建结果
npm run preview
```

## 自动部署

项目使用 GitHub Actions 实现自动化部署：

- **触发条件**：推送到 `main` 或 `master` 分支
- **部署内容**：`dist` 目录下的静态文件
- **访问地址**：https://leezb101.github.io/presentation/

### 部署流程

1. 代码推送到主分支
2. GitHub Actions 自动触发
3. 安装依赖并构建项目
4. 将 `dist` 目录部署到 GitHub Pages
5. 1-2分钟后可访问更新后的网站

### 配置文件

- `.github/workflows/deploy.yml` - GitHub Actions 工作流配置
- `vite.config.js` - Vite 构建配置，设置了正确的 `base` 路径

## 技术栈

- Lit - Web Components 框架
- Vite - 构建工具
- UnoCSS - 原子化 CSS 框架
- GSAP - 动画库
- Chart.js - 图表库