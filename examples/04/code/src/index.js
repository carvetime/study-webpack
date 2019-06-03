// import _ from 'lodash'

// const div = document.createElement('div')
// div.innerText = _join(['load','index'])
// document.body.appendChild(div)

function getComponent(){
    return import('lodash').then(({default: _}) =>{
        const element = document.createElement('div')
        element.innerHTML = _.join(['Hello','Webpack'])
        return element
    }).catch(error => 'load lodash error')
}

getComponent().then(component => {
    document.body.appendChild(component)
})

// async function getComponent(){
//     const {default: _} = await import('lodash')
//     const element = document.createElement('div')
//     element.innerHTML = _.join(['Hello','Webpack'])
//     return element
// }

// getComponent().then(component => {
//     document.body.appendChild(component)
// })