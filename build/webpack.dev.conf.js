const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
    entry: {
        index: './demo/src/index.ts'   
    },
    output: {
        path: path.resolve(__dirname, '../demo/dist'),
        publicPath: "demo/dist/",
        filename: "[name].js"
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        contentBase: './',
        compress: true,
        port: 2345,
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: false,
            version: false,
            warnings: true,
            colors: {
                green: '\u001b[32m',
            }
        }
    }
});
