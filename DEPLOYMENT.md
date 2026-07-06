# GitHub Pages 发布说明

本项目已配置 GitHub Actions 流水线：`.github/workflows/deploy.yml`。

## 1. 仓库改为 Public

在 GitHub 仓库页面进入：

```text
Settings → General → Danger Zone → Change repository visibility → Public
```

也可以使用 GitHub CLI：

```bash
gh repo edit <owner>/<repo> --visibility public
```

## 2. 启用 GitHub Pages Actions 部署

进入：

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

## 3. 推送代码触发流水线

```bash
git add .
git commit -m "Deploy zhy'sspace portfolio with GitHub Pages"
git push origin main
```

之后 Actions 会执行：安装依赖 → Vite 构建 → 上传 `dist` → 部署到 GitHub Pages。

## 4. 预览地址

GitHub Pages 项目站点地址格式：

```text
https://<你的 GitHub 用户名>.github.io/<仓库名>/
```

如果仓库名保持为 `zhys-space`，地址格式为：

```text
https://<你的 GitHub 用户名>.github.io/zhys-space/
```

真实地址也会显示在 GitHub Actions 的 `Deploy to GitHub Pages` job 里，对应 `github-pages` environment URL。

## 5. Vite 路径说明

`vite.config.js` 已设置：

```js
base: './'
```

项目中的 PNG 资源路径也已改为 `import.meta.env.BASE_URL` 生成，因此可以兼容 GitHub Pages 的二级路径，不会因为 `/assets/...` 根路径导致图片丢失。
