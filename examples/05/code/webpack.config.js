
// const path = require('path')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: {
//         index:'./examples/05/code/src/index.js'
//     },
//     plugins: [
//         new CleanWebpackPlugin(),
//         new HtmlWebpackPlugin({
//         title: 'Caching'
//         }),
//       ],
//     output: {
//         filename: '[name].[contenthash].bundle.js',
//         path: path.resolve(__dirname, 'examples/05/code/dist')
//     }
// }

// const path = require('path')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: {
//         index:'./examples/05/code/src/index.js',
//         print: './examples/05/code/src/print.js'
//     },
//     plugins: [
//         new CleanWebpackPlugin(),
//         new HtmlWebpackPlugin({
//         title: 'Caching'
//         })
//       ],
//     output: {
//         filename: '[name].[contenthash].bundle.js',
//         path: path.resolve(__dirname, 'examples/05/code/dist')
//     },
//     optimization:{
//         runtimeChunk: 'single',
//         splitChunks:{
//             cacheGroups:{
//                 vendor:{
//                     test: /[\\/]node_modules[\\/]/,
//                     name: 'vendors',
//                     chunks: 'all'
//                 }
//             }
//         }
//     }
// }

const path = require('path')
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode: 'development',
    entry: {
        index:'./examples/05/code/src/index.js',
        print: './examples/05/code/src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        title: 'Caching'
        }),
        new webpack.HashedModuleIdsPlugin()
      ],
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'examples/05/code/dist')
    },
    optimization:{
        runtimeChunk: 'single',
        splitChunks:{
            cacheGroups:{
                vendor:{
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
}
