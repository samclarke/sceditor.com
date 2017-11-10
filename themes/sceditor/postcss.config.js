module.exports = {
    map: false,
    plugins: [
        require('postcss-import')({
            root: './static/css/'
        }),
        require('autoprefixer')({
            browsers: [
                'last 4 versions',
                'ie 10'
            ]
        }),
        require('cssnano')({
            preset: 'default',
        })
    ],
};
