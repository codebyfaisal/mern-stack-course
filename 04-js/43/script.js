// import { add } from './functions.js'
const add = require('./functions.js')

document.addEventListener('DOMContentLoaded',
    () => document.body.classList.toggle(
        localStorage.getItem('theme')
    ))

document.getElementById('toggler')
    .addEventListener('click', () => {
        const classes = document.body.className;

        document.body.classList.toggle('dark')

        if (!classes.includes('dark')) localStorage.setItem('theme', 'dark')
        if (classes.includes('dark')) localStorage.setItem('theme', '')
    })

console.log(add(1, 2))