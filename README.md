# zhy's space · AI Designer Portfolio

一个从零搭建的 React + Vite 高端 AI 设计师个人作品集基础版本。当前版本已包含：

- 全屏首屏 Hero 与视频占位图
- 固定玻璃拟态导航栏：角色介绍 / 作品案例 / 互动体验 / 联系方式
- AI 设计师角色介绍
- 作品案例区：视频占位 + 海报占位
- 互动体验区：Ghost Cursor 风格桌面光标轨迹 + 指针光场面板
- 联系方式区：电话与邮箱占位
- 版心 `max-width: 1700px`
- 移动端降级：隐藏重光标动效、使用小尺寸 PNG、案例图片懒加载

## 运行方式

```bash
npm install
npm run dev
```

浏览器打开终端提示的本地地址，通常是：

```bash
http://localhost:5173
```

构建生产版本：

```bash
npm run build
npm run preview
```

## 目录结构

```text
zhys-space/
├── public/
│   └── assets/                  # PNG 占位素材，不使用 SVG
├── src/
│   ├── components/
│   │   └── GhostCursor.jsx       # ReactBits Ghost Cursor 风格的自实现轻量动效
│   ├── data/
│   │   └── videoPrompts.js       # 视频/动态素材提示词
│   ├── App.jsx                   # 页面结构
│   ├── main.jsx                  # React 入口
│   └── styles.css                # 全站视觉与响应式样式
├── MOTION_PROMPTS.md             # 动态视频生成提示词
├── index.html
├── package.json
└── vite.config.js
```


## GitHub Pages 预览部署

当前版本已补齐 GitHub Actions 流水线：

```text
.github/workflows/deploy.yml
```

部署前需要在 GitHub 仓库设置里完成两件事：

1. 将仓库 visibility 改成 Public。
2. 进入 `Settings → Pages → Build and deployment → Source`，选择 `GitHub Actions`。

推送到 `main` 分支后，流水线会自动执行 `npm ci`、`npm run build`，并把 `dist` 发布到 GitHub Pages。

预览地址格式：

```text
https://<你的 GitHub 用户名>.github.io/<仓库名>/
```

如果仓库名保持为 `zhys-space`：

```text
https://<你的 GitHub 用户名>.github.io/zhys-space/
```

更多步骤见 `DEPLOYMENT.md`。

## 后续替换素材

当前素材均为生成的 PNG 占位图：

- `public/assets/hero-video-placeholder.png`：首屏视频静态 poster
- `public/assets/case-video-placeholder.png`：案例视频静态 poster
- `public/assets/poster-dream-synthesis.png`：海报 1
- `public/assets/poster-glass-system.png`：海报 2
- `public/assets/poster-orange-signal.png`：海报 3
- `public/assets/contact-card.png`：联系方式视觉卡片

替换方式：保持文件名不变，直接覆盖对应 PNG；或在 `src/App.jsx` 的 `workItems` 中替换为新路径。

## 视频替换示例

当前 Hero 使用 PNG 作为视频位占位。拿到真实视频后，可将 Hero 的 `picture` 区块替换为：

```jsx
<video
  className="hero-video"
  poster={publicAsset('assets/hero-video-placeholder.png')}
  muted
  autoPlay
  loop
  playsInline
>
  <source src={publicAsset('assets/videos/hero.webm')} type="video/webm" />
  <source src={publicAsset('assets/videos/hero.mp4')} type="video/mp4" />
</video>
```

再在 CSS 中让 `.hero-video` 使用和当前 `.hero-media img` 相同的铺满样式。

## 联系方式替换

在 `src/App.jsx` 中搜索：

```text
+86 000 0000 0000
hello@zhyspace.design
```

替换为真实电话与邮箱即可。

## 设计说明

视觉方向：暖橙、暖黄、白色、透明玻璃材质；避免普通模板感，强调创意机构官网式的空间感、留白、慢速动效与高端视觉层次。


## 相关仓库

- [ge](https://github.com/loveOneBaby/ge)：张海云全栈工程师方向作品集（另一条作品集线，Render 部署）
- [ge-preview](https://github.com/loveOneBaby/ge-preview)：`ge` 的 GitHub Pages 静态预览
