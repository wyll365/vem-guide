# VEM 售卖机管理后台使用手册

面向商户运营人员与渠道人员的图文操作手册,VitePress 站点。

## 本地开发

```bash
pnpm install
pnpm docs:dev      # http://localhost:5177
pnpm docs:build    # 产出静态站 .vitepress/dist/
```

## 截图工具

`scripts/screenshot.mjs` 登录管理后台后按 `scripts/shots.json` 清单逐页自动截图,输出到 `public/images/`:

```bash
VEM_GUIDE_URL=http://<后台地址> VEM_GUIDE_USER=<账号> VEM_GUIDE_PASS=<密码> pnpm shots
```

## 目录

- `guide/` 商户操作指南(按业务流程组织)
- `channel/` 渠道操作指南
- `faq.md` 常见问题
- `public/images/` 页面截图(灰色虚线框为待补占位图)
