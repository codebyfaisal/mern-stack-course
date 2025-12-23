const head = document.getElementById('heading')
// * --- SetInterval ---
// let count = 1
// setInterval(() => {
//     head.innerHTML = count++
// }, 2000)


// * --- SetTimeout - Flow of setTimeout---
// console.log("Program started")

// console.log("Program going through Timeout")

// setTimeout(() => {
//     console.log("setTimeout function executed")
// }, 5000);

// console.log("Program after Interval")

// console.log("Program end")


// * --- EventListener ---
// let isRed = false

// const toggleBg = () => {
//     isRed = !isRed
//     document.body.style.backgroundColor = isRed ? 'red' : ''
// }

// head.addEventListener('click', toggleBg)

// * --- ---- ---
// head.addEventListener('click', () => {
//     setTimeout(() => {
//         head.style.color = 'red'
//     }, 2000)
// })

// * --- ---- ---
const btn = document.getElementById('btn')

// btn.addEventListener('click', () => {
//     btn.style.color = 'red'
//     btn.style.fontSize = '2rem'
// })

// btn.onclick = () => {
//     btn.style.color = 'red'
//     btn.style.fontSize = '2rem'
// }

// setTimeout(() => {
//     btn.onclick = null
//     console.log("Event remove successfully")
// }, 5000);

// attribute
// direct function
// addEventListener

// btn = {
//     onclick: () => console.log('second\n')
// }

// We can't use two functions on same event
// btn.onclick = () => console.log('first') // storing data in local
// btn.onclick = () => console.log('second') // storing data in server

// btn.addEventListener('click', () => console.log('Data Stored in local storage')) // storing data in local
// btn.addEventListener('click', () => console.log('Data Stored in server')) // storing data in server

// const dataInServer = () => console.log('Data Stored in server')
// btn.addEventListener('click', dataInServer)

// let i = 0

// let myFtnId = null

// const myFtn = () => {
//     console.log(i++)
//     // console.log(myFtnId)
// }

// myFtnId = setInterval(myFtn, 1000)

// setTimeout(() => {
//     btn.removeEventListener('click', dataInServer)
// }, 5000);

btn.addEventListener('mouseover', () => {
    console.log("Mouse over")
    document.body.style.background = "#ccc"
})

// btn.addEventListener('mouseout', () => {
//     console.log("Mouse out")
//     document.body.style.background = ""
// })

// btn.addEventListener('mousedown', () => {
//     console.log("Mouse down")
//     document.body.style.background = "#ccc"
// })
// btn.addEventListener('click', (e) => {
//     console.log("Click", e.target)
//     document.body.style.background = "#ccc"
// })

// btn.addEventListener('mouseup', () => {
//   console.log('Mouse up')
// })

// document.addEventListener('mousemove', (e) => {
//   console.log("Mouse is moving")
// })

// document.getElementById('input')
//     .addEventListener('input', (e) => {
//         console.log(e.target.value)
//     })
// document.getElementById('input1')
//     .addEventListener('change', (e) => {
//         console.log(e.target.value)
//     })
