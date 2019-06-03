

/*
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', // 打开开发环境时会开启souce map功能方便我们debug定位错误
    entry: './examples/03/code/src/index.js',
    // entry: {
    //     app: './examples/03/code/src/index.js',
    //     log: './examples/03/code/src/log.js'
    // },
    // entry: {
    //     app: ['./examples/03/code/src/index.js','./examples/03/code/src/log.js'],
    // },
    output: {
        // filename: '[name]-bundle.js',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'examples/03/code/dist')
    },
    // devtool: 'inline-source-map',  配置不同的source map方式
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Development'
    //     })
    // ]
    devServer: {
        contentBase: './examples/03/code/dist/'
    }
}

*/

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './examples/03/code/src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
          })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'/examples/03/code/dist'),
        publicPath: '/'
    }
}