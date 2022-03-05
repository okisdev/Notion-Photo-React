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

## How to deploy

### Preparation

-   **Notion API**: See [here](https://github.com/splitbee/notion-api-worker) for how to deploy a notion-api by yourself. (You can use `notion-api.splitbee.io` instead)
-   **Public Notion Table**: Create a notion table with below properties. (You can duplicate a template [here](https://harrly.notion.site/d04d7d2efc9a4e79a3c98d7d4c9e8fc9). Please make sure you have content inside a property box)
    -   title: Title
    -   location: Select
    -   published: Checkbox
    -   date: Date
    -   slug: Text
    -   url: URL (Your photo image url)
-   Change your site config: via [config/site.config.js](/config/site.config.js)

### Deploy locally

1. Git Clone to local
2. Copy `.env.example` file to `.env.local`
3. Add your `NOTION_API` and `NOTION_TABLE_SLUG` (for instance, `d04d7d2efc9a4e79a3c98d7d4c9e8fc9`) to `.env.local` file
4. run `yarn` to initialize the project
5. run `yarn build && yarn start` to start the project

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FHarry-Yep%2FNotion-Photo-React)

1. Click the button above or visit [here](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FHarry-Yep%2FNotion-Photo-React)
2. Add `NOTION_API` and `NOTION_TABLE_SLUG` to Environment Variables
3. Deploy

## Improvement / Plans

-   [ ] Add PostView.
-   [ ] Using [Notion Official API](https://developers.notion.com/).
-   [ ] Add Tag.

## Credits

Copyright (c) 2022 Harry Yep

-   All Authors & Contributors who own its repository
