
// const path = require('path')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack')

// module.exports = {
//     entry: './examples/08/code/src/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'examples/08/code/dist')
//     },
//     plugins: [
//         new CleanWebpackPlugin(),
//         new HtmlWebpackPlugin({
//         title: 'Product'
//         }),
//         new webpack.ProvidePlugin({
//              _: 'lodash'
//         })
//       ],
// }


const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: {
        index:'./examples/08/code/src/index.js',
        polyfills: './examples/08/code/src/polyfills.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'examples/08/code/dist')
    },
    plugins: [
        new webpack.ProvidePlugin({
             _: 'lodash'
        })
    ],
    module:{
        rules: [
            {
                test: require.resolve('./examples/08/code/src/oldLib.js'),
                use: 'exports-loader?olddata=olddata'
            }
          ]
    }


}
