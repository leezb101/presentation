## 将您的 Lit 项目部署到 GitHub Pages，实现公网访问

您可以轻松地将使用 Lit 框架构建的静态网站部署到 GitHub Pages，并免费向公网展示您的作品。整个过程主要包括构建您的 Lit 项目生成静态文件，然后将这些文件推送至一个特定的 GitHub 仓库，并开启 GitHub Pages 功能。您还可以选择绑定自定义域名，让您的网站更具个性化。

以下是详细的步骤指南：

### 第一步：构建您的 Lit 项目

在部署之前，您需要将您的 Lit 项目打包成静态 HTML、CSS 和 JavaScript 文件。

1.  **确保您的项目可以正确构建：** 大多数 Lit 项目使用如 Vite 或 Rollup 等构建工具。请确保您的 `package.json` 文件中包含一个 `build` 脚本。通常情况下，这个脚本会是类似 `vite build` 或 `rollup -c` 的命令。

2.  **配置正确的输出路径：** 在您的构建配置文件中（例如 `vite.config.js`），您可能需要配置 `base` 选项。当您部署到 `https://<Your-GitHub-Username>.github.io/<Your-Repo-Name>/` 这样的路径时，您需要将 `base` 设置为您的仓库名称。

      * **对于 Vite 项目 (`vite.config.js`)：**

        ```javascript
        import { defineConfig } from 'vite';

        export default defineConfig({
          base: '/<Your-Repo-Name>/', // 请将 <Your-Repo-Name> 替换为您的仓库名称
          build: {
            outDir: 'dist', // 构建输出目录
          },
        });
        ```

3.  **执行构建命令：** 在您的项目根目录下运行构建命令。

    ```bash
    npm run build
    ```

    执行完毕后，您的项目根目录下会生成一个包含所有静态文件的 `dist` 文件夹（或您在构建配置中指定的其他输出目录）。

### 第二步：创建并配置 GitHub 仓库

接下来，您需要在 GitHub 上创建一个新的仓库来存放您构建好的静态文件。

1.  **创建新的 GitHub 仓库：**

      * 登录您的 GitHub 账号。
      * 点击右上角的 "+" 号，选择 "New repository"。
      * 为您的仓库命名（例如 `my-lit-project`）。
      * 将仓库设为 "Public"。
      * 点击 "Create repository"。

2.  **将构建好的文件推送到仓库：**

      * 进入您本地项目中的 `dist` 文件夹。

      * 将其初始化为一个 Git 仓库，并与您刚刚创建的 GitHub 仓库关联。

        ```bash
        cd dist
        git init
        git add .
        git commit -m "Initial deployment"
        git branch -M main
        git remote add origin https://github.com/<Your-GitHub-Username>/<Your-Repo-Name>.git
        git push -u origin main
        ```

        请将 `<Your-GitHub-Username>` 和 `<Your-Repo-Name>` 替换为您的实际信息。

### 第三步：启用 GitHub Pages

现在，您需要在您的 GitHub 仓库设置中启用 GitHub Pages。

1.  **进入仓库设置：** 在您的 GitHub 仓库页面，点击 "Settings" 标签。

2.  **选择 "Pages"：** 在左侧导航栏中，选择 "Pages"。

3.  **配置发布源：**

      * 在 "Build and deployment" 下的 "Source" 部分，选择 "Deploy from a branch"。
      * 在 "Branch" 部分，选择 `main` 分支和 `/(root)` 目录。
      * 点击 "Save"。

4.  **访问您的网站：** 保存设置后，GitHub Pages 会开始部署您的网站。页面顶部会显示您的网站链接，格式通常为 `https://<Your-GitHub-Username>.github.io/<Your-Repo-Name>/`。部署过程可能需要几分钟时间。

### 第四步（可选）：配置自定义域名

如果您拥有自己的域名，可以将其绑定到您的 GitHub Pages 网站上。

1.  **在 GitHub Pages 设置中添加自定义域名：**

      * 回到您仓库的 "Settings" \> "Pages" 页面。
      * 在 "Custom domain" 输入框中，输入您的自定义域名（例如 `www.your-domain.com` 或 `your-domain.com`）。
      * 点击 "Save"。GitHub 会自动在您的仓库中创建一个名为 `CNAME` 的文件，其中包含您的域名。

2.  **配置您的 DNS 提供商：**

      * 登录到您的域名注册商或 DNS 托管服务商的网站。
      * 进入 DNS 管理界面。
      * 根据您要使用的域名类型创建相应的 DNS 记录：
          * **对于子域名 (e.g., `www.your-domain.com`)：** 创建一个 `CNAME` 记录，将您的子域名指向 `<Your-GitHub-Username>.github.io`。
          * **对于根域名 (e.g., `your-domain.com`)：** 创建 `A` 记录，指向 GitHub Pages 的 IP 地址：
              * `185.199.108.153`
              * `185.199.109.153`
              * `185.199.110.153`
              * `185.199.111.153`

    **注意：** DNS 记录的生效可能需要一些时间，从几分钟到几小时不等。

3.  **强制 HTTPS：** 一旦您的自定义域名配置成功并且 DNS 记录生效，建议您回到 GitHub Pages 的设置页面，勾选 "Enforce HTTPS" 选项，为您的网站启用 SSL 加密。

通过以上步骤，您就可以成功地将您的 Lit 项目构建的静态页面部署到 GitHub Pages，并通过公网进行访问。
