# Notion Photo with React

> A fast serverless Photo Gallery powered by Notion.

A Photo Gallery powered by [Notion](https://notion.so), built with [React](https://reactjs.org), [Next.js](https://nextjs.org), [tailwindcss](https://tailwindcss.com), [TypeScript](https://www.typescriptlang.org/), [Notion-Api-Worker](https://github.com/splitbee/notion-api-worker) and more.

## Features

-   Easily change the things you want by editing [`.env`](./.env.example) file.
-   Support [Google Analytics](https://analytics.google.com/) & [Splitbee Analytics](https://splitbee.io/).
-   Self host notion-api by using [Cloudflare Workers](https://workers.dev). (Default [notion-api](https://notion-api.splitbee.io) By Splitbee)
-   Use your favorite Google Fonts.
-   Use your own domain.

## Performance

![Notion-Photo-React-Lighthouse-Performance-Desktop](https://cdn.harrly.com/project/GitHub/Notion-Photo-React/img/Lighthouse-Performance-Desktop.png)

-   Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) for testing

## 部署步骤

### 准备工作

-   **Notion API**: [部署](https://github.com/splitbee/notion-api-worker) 一个属于自己的 notion-api (当然你可以使用默认的 [notion-api.splitbee.io](https://notion-api.splitbee.io/))
-   **公开的Notion表格**: 创建一个有以下字段的表格 (也可以直接点击 [这里](https://harrly.notion.site/d04d7d2efc9a4e79a3c98d7d4c9e8fc9) 克隆一份，确保你的表格有以下字段)
    -   title: Title （标题）
    -   location: Select （地点）
    -   published: Checkbox （是否发布，勾选则用户可见）
    -   date: Date （日期）
    -   slug: Text （图片唯一的url字段参数，如：`first`；用于访问该图片详情xxx.xxx/posts/first）
    -   url: URL （图片的链接地址）
-   修改网站配置: 文件 [config/site.config.js](/config/site.config.js)

### 本地部署

1. 克隆代码到本地
2. 复制 `.env.example` 文件并且重命名为 `.env.local`
3. 修改`.env.local`文件里面的 `NOTION_API` 和 `NOTION_TABLE_SLUG` （例如`NOTION_API='notion-api.splitbee.io'` `NOTION_TABLE_SLUG='d04d7d2efc9a4e79a3c98d7d4c9e8fc9'`）
4. 执行 `yarn` 命令初始化项目（拉依赖）
5. 执行 `yarn build && yarn start` 启动项目
6. 访问 http://localhost:3000 成功看到页面

### 在Vercel部署

[![在Vercel部署](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FHarry-Yep%2FNotion-Photo-React)

1. 点击上面的按钮或者点击 [这里](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FHarry-Yep%2FNotion-Photo-React) 进行部署
2. 在 项目->Settings->Environment Variables 添加环境变量  `NOTION_API` 和 `NOTION_TABLE_SLUG`（对应的值参考**本地部署**第三点）
3. 成功部署
4. 自定义域名：项目->Settings->Domains，绑定并解析个人域名

## Improvement / Plans

-   [ ] Add PostView.
-   [ ] Using [Notion Official API](https://developers.notion.com/).
-   [ ] Add Tag.

## Credits

Copyright (c) 2022 Harry Yep

-   All Authors & Contributors who own its repository
