// Before you make changes to this document, please read https://docs.okis.dev/docs/notion-photo-react#change-the-site-configuration

module.exports = {
    global: {
        site: {
            name: 'Notion Photo React Example',
            description: 'Photo Gallery built with Notion, React.JS, Next.JS, tailwindcss, TypeScript, notion-api-worker and more.',
            url: 'https://npr.okis.dev/',
            author: 'Harry Yep',
            banner_img: `https://cdn.harrly.com/project/GitHub/Notion-Photo-React/img/Notion-Photo-React.Banner.png`,
            nav: [
                {
                    name: 'Home',
                    url: '/',
                    external: false,
                    position: 'left',
                },
                {
                    name: 'GitHub',
                    url: 'https://github.com/okisdev',
                    external: true,
                    position: 'right',
                },
            ],
            language: [
                { name: '🇬🇧 English', code: 'en-GB' },
                { name: '🇨🇳 简体中文', code: 'zh-CN' },
                { name: '🇭🇰 繁體中文', code: 'zh-HK' },
            ],
            font: '',
        },
        content: {
            header: {
                description: `A Photo Gallery built with <a href='https://notion.so/' class='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>Notion</a>, <a href='https://nextjs.org/' class='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>Next.js</a>, <a href='https://tailwindcss.com/' class='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>tailwindcss</a>, <a href='https://www.typescriptlang.org/' class='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>TypeScript</a>, <a href='https://github.com/splitbee/notion-api-worker' class='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>Notion-Api-Worker</a> and more. (Find more on <a href='https://github.com/Harry-Yep/Notion-Photo-React' class='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>GitHub</a>)`,
            },
            license: {
                name: 'CC BY-NC-SA 4.0',
                url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
            },
            footer: {
                copyright: 'Copyright © 2023 Harry Yep. All rights reserved.',
            },
        },
        analytics: {
            umami: {
                url: 'https://umami.harisfox.com/script.js',
                website_id: '4c785146-016d-48b8-81fe-85172c82b37d',
            },
        },
    },
};
