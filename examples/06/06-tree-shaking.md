
Tree shaking 是webpack是借鉴于rollup的无用代码移除的概念，只有在product环境下时候webpack才会使用tree shaking机制，以此达到最大的优化缩减代码体积。

我们首先创建一个test.js文件，里面包含两个方法

```js
export  function test1(){
    console.log("test1")
}

export function test2(){
    console.log("test2")
}
```

然后在index.js里面调用test.js的其中一个test1方法
```js
import {test1} from './test'

test1()
```

配置下简单webpack.config.js文件
```js

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index:'./examples/06/code/src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        title: 'tree shaking'
        })
      ],
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'examples/06/code/dist')
    }
}
```

然后run一下看看打包结果
```bash
npm run build
```

查看下dist/index.哈希值.bundle文件中代码

```
// 精简后的代码
eval("
__webpack_require__.d(__webpack_exports__, \"test1\", function() { return test1; });
__webpack_require__.d(__webpack_exports__, \"test2\", function() { return test2; });
function test1(){\n    console.log(\"test1\")\n}
function test2(){\n    console.log(\"test2\")\n}
//# sourceURL=webpack:///./examples/06/code/src/test.js?
");
```
我们发现这里面只有test1和test2方法，test2方法我们并没有实际使用，但是还是打包进来了

接下来我们修改下webpack.config.js的打包环境
```
module.exports = {
    mode: "production",
}
```
再run一下再查看下dist/index.哈希值.bundle文件中代码

```
// 精简后的部分代码
return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),console.log("test1")}]);
```

我们发现这里面只有test1方法，并没有发现test2方法，说明在生产环境下无用代码没有被打包进来。

看上去只要我们直接生产环境打包就tree shaking就会自动删除无用代码，但tree shaking还是存在局限和不足，比如在某些情况下不能做到完全移除无用代码的情况，以及它建立在静态语法分析的基础上，需要确保代码没有使用或编译成CommonJS模块，这个留到后期再进一步解析。

[github代码](https://github.com/carvetime/study-webpack)