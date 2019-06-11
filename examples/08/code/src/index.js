// import 'babel-polyfill';

// var olddata = require("exports-loader?olddata!./oldLib.js")
// var utils = require("exports-loader?utils!./oldLib.js")

// var element = document.createElement('div')

// utils.oldLog();
// this.alert("old lib is" + olddata)
// console.log("olddata is ==",olddata)


// var array = [1,2,3];
// Array.from(array).forEach(($item) => {
//  console.log($item);
//  olddata = olddata + $item
// })

// element.innerHTML = olddata
// document.body.appendChild(element)

import {olddata} from './oldLib'

var element = document.createElement('div')

console.log("olddata is ==",olddata)


var array = [1,2,3];

var newdata = olddata

Array.from(array).forEach(($item) => {
 console.log($item);
 newdata = newdata + $item
})

element.innerHTML = newdata
document.body.appendChild(element)

