module.exports = {
    map: false,
    plugins: [
        require('postcss-import')({
            root: './static/css/'
        }),
        require('cssnano')({
            preset: 'default',
        }),
    ],
};
