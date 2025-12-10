// * ---   Get element by id   ---
// const heading = document.getElementById("heading")

// console.log(heading)

// * ---   Get element by class name   ---
// const headings = document.getElementsByClassName("headCl")

// console.log(headings)

// * ---   Traversing the HTML collection   ---
// for (let i = 0; i < headings.length; i++) {
//     headings[i].style.color = "red"
// }

// Array.from(headings).forEach(element => {
//     console.log(element)
// });

// * ---   Converting the HTML collection to an array   ---
// console.dir(Array.from(headings))
// console.dir(headings)

// * ---   Query selector (single)  ---
// const qS = document.querySelector("input[type='text']")

// * ---   Query selector (multiple HTML collection)   ---
// const qS = document.querySelectorAll("input[type='text']")

// console.log(qS)

const h1 = document.getElementById("heading")

// * ---   Content Accessing Methods   ---
// console.log(h1.innerHTML)
// console.log(h1.innerText)
// console.log(h1.textContent)
// console.log(h1.outerHTML)

// h1.textContent = "Hello"
// h1.textContent += "Hello"
// h1.innerHTML = "<i>Hello</i>"
// h1.innerText = "<i>Hello</i>"
// h1.innerText = "hello"

// console.log(document.querySelector(".heading2"))
// * ---   Accessing elements id as string   ---
// h1.id = "motu"

// console.log(document.getElementById("motu"))

const cards = document.querySelectorAll(".card")

// * ---   Accessing classes and modifying classes   ---
// cards[2].className += 'sale'

// cards[2].setAttribute('class', cards[2].getAttribute('class') + 'sale')

// console.log(cards[1].classList)

// cards[1].classList.remove('sale')
// cards[3].classList.add('sale')
// cards[1].classList.toggle('sale')
// cards[1].classList.toggle('sale')

cards[1].classList