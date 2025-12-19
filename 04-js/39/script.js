// // let box = document.getElementById("car")
// // // box.style.width = '400px'
// // // box.style.height = '400px'

// // setTimeout(()=>{
// //     box.style.backgroundColor = 'green'
// // },3000)


// // console.log(box)

// const container = document.getElementById("container")


// // for(let i = 0; i < 3; i++) {
// //     const card = document.createElement("div")
// // card.setAttribute("class", "card")
// // card.innerText = "This is js made card"
// // // card.appendChild(card)
// // container.append(card)
// // // container.appendChild(card)
// // // container.appe   nd(card)
// // console.log(card)
// // }

// const card = document.createElement("div")
// card.setAttribute("class", "card")
// card.innerText = "This is js made card"
// // card.appendChild(card)
// // container.append(card)
// // container.appendChild(card)
// // container.prepend(card)
// card.style.color = 'white'
// console.log(card)
// // card.hidden = true  

// const bCard = document.querySelector('.blue')
// // bCard.after(card)

// container.insertAdjacentElement("beforeend", card)

// Card.remove()a


cardsApi = [
    {
        name: "faisal",
        age : 34,
    },
    {
        name: "faisal",
        age : 34,
    },
    {
        name: "faisal",
        age : 34,
    },
    {
        name: "faisal",
        age : 34,
    },
    {
        name: "faisal",
        age : 34,
    },
]

const container = document.getElementById('container')

cardsApi.forEach(ca => {
    const div = document.createElement('div');
    const h1 = document.createElement('h1')
    const p = document.createElement('p')

    div.className = 'card'

    h1.innerText = ca.name
    p.innerText = ca.age
    
    div.appendChild(h1)
    div.appendChild(p)

    container.appendChild(div)
});