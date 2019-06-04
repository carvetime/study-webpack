
import _ from 'lodash'
import print from './print'

const element = document.createElement('div')
element.innerHTML = _.join(['缓存','机制8'])
print("hello")
document.body.appendChild(element)