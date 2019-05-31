
import './style.css'
import icon from './test.png'

const div = document.createElement("div")


div.setAttribute("class","container")
div.innerText = "资源管理"
document.body.appendChild(div)

const img = new Image()
img.src = icon
document.body.appendChild(img)