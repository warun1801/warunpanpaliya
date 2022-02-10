const withImamges = require('next-images');
module.exports = withImamges();
module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        return config;
    },
    basePath: "",
    assetPrefix: ''
}