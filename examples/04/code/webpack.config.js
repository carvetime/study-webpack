
// 入口配置的方式

// const path = require('path')
// const webpack = require('webpack')
// const HTMLWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     mode: 'development',
//     entry: {
//         index: './examples/04/code/src/index.js',
//         another: './examples/04/code/src/another-module.js',
//     },
//     plugins: [
//         new HTMLWebpackPlugin({
//             title: 'Code Splitting'
//         }),
//     ],
//     output: {
//         filename: '[name]-bundle.js',
//         path: path.resolve(__dirname, 'examples/04/code/dist')
//     }
// }

// 生成的文件是
// Built at: 06/03/2019 11:29:02 AM
//             Asset       Size   Chunks             Chunk Names
// another-bundle.js    551 KiB  another  [emitted]  another
//   index-bundle.js    551 KiB    index  [emitted]  index


// 放重配置
// const path = require('path')
// const webpack = require('webpack')
// const HTMLWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     mode: 'development',
//     entry: {
//         index: './examples/04/code/src/index.js',
//         another: './examples/04/code/src/another-module.js',
//     },
//     plugins: [
//         new HTMLWebpackPlugin({
//             title: 'Code Splitting'
//         }),
//     ],
//     optimization: {
//         splitChunks: {
//             chunks: 'all'
//         }
//     },
//     output: {
//         filename: '[name]-bundle.js',
//         path: path.resolve(__dirname, 'examples/04/code/dist')
//     }
// }

// 生成的文件是
// Built at: 06/03/2019 11:36:26 AM
//                           Asset       Size                 Chunks             Chunk Names
//               another-bundle.js   6.98 KiB                another  [emitted]  another
//                 index-bundle.js   6.99 KiB                  index  [emitted]  index
//                      index.html  333 bytes                         [emitted]  
// vendors~another~index-bundle.js    547 KiB  vendors~another~index  [emitted]  vendors~another~index

// 值得注意点是 另外还有 mini-css-extract-plugin bundle-loader promise-loader 插件对css 和 bundle 进行防重分离


// 动态导入
const path = require('path')

module.exports = {
    mode: 'development',
    entry: {inde:'./examples/04/code/src/index.js'},

    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'examples/04/code/dist')
    }
}

// Built at: 06/03/2019 6:19:34 PM
//          Asset      Size  Chunks             Chunk Names
//    0.bundle.js   547 KiB       0  [emitted]  
// inde.bundle.js  8.92 KiB    inde  [emitted]  inde