
const path = require('path')

module.exports = {
    entry: './examples/02/code/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'examples/02/code/dist')
    },
    module: {
        rules:[
            {
                test: /style.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /png$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}