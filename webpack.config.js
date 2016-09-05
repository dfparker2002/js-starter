module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'public/scripts/client.js'
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint',
            exclude: /(node_modules|server.js)/
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|server.js)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    eslint: {
        failOnWarning: false,
        failOnError: true
    }
};