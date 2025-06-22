# 自动部署说明

## 使用方法

### 方法一：手动部署
```bash
# 直接运行部署脚本
./deploy.sh "更新内容描述"

# 或使用 npm 脚本
npm run deploy "更新内容描述"
```

### 方法二：Git 提交自动部署
在提交信息中包含 `[deploy]` 标记，提交后会自动部署：

```bash
git add .
git commit -m "修复样式问题 [deploy]"
```

### 方法三：普通提交（不部署）
正常提交不会触发自动部署：

```bash
git add .
git commit -m "修复样式问题"
```

## 部署流程

1. 运行 `npm run build` 构建项目
2. 进入 `dist` 目录
3. 初始化/更新 Git 仓库
4. 提交并推送到 GitHub Pages
5. 1-2分钟后在 https://leezb101.github.io/presentation/ 查看效果

## 注意事项

- 确保已配置 SSH 密钥，能正常推送到 GitHub
- 每次部署会强制推送（`git push -f`）到 GitHub Pages 分支
- 部署脚本会自动在提交信息后添加时间戳