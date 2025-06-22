#!/bin/bash

# 自动部署到GitHub Pages脚本
# 用法: ./deploy.sh "提交信息"

set -e

echo "🚀 开始自动部署到GitHub Pages..."

# 检查是否提供了提交信息
if [ -z "$1" ]; then
    echo "❌ 请提供提交信息"
    echo "用法: ./deploy.sh \"你的提交信息\""
    exit 1
fi

COMMIT_MSG="$1"

# 1. 构建项目
echo "📦 构建项目..."
npm run build

# 2. 进入dist目录
cd dist

# 3. 初始化git仓库（如果不存在）
if [ ! -d ".git" ]; then
    echo "🔧 初始化Git仓库..."
    git init
    git branch -M main
    git remote add origin git@github.com:leezb101/presentation.git
fi

# 4. 添加所有文件并提交
echo "📝 提交更改..."
git add .
git commit -m "$COMMIT_MSG - $(date '+%Y-%m-%d %H:%M:%S')"

# 5. 推送到GitHub
echo "⬆️ 推送到GitHub..."
git push -f origin main

# 6. 返回项目根目录
cd ..

echo "✅ 部署完成！"
echo "🌐 网站地址: https://leezb101.github.io/presentation/"
echo "⏰ 请等待1-2分钟让GitHub Pages更新..."