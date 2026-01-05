const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

let h = 0
let m = 0
let s = 0

setInterval(() => {
    if (s === 60) {
        m++
        s = 0
    }
    if (m === 60) {
        h++
        m = 0
    }

    seconds.innerText = s < 10 ? '0' + s++ : s++;
    minutes.innerText = m < 10 ? '0' + m : m;
    hours.innerText = h < 10 ? '0' + h : h;
}, 1000)