
const path = require('path')

module.exports = {
    entry: './examples/01/code/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'examples/01/dist')
    }
}