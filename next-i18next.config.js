const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: 'en-GB',
        locales: ['en-GB', 'zh-CN', 'zh-HK'],
    },
    localePath: path.resolve('public/locales'),
};
