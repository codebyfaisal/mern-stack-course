// let products = [
//     {
//         name: "Laptop",
//         price: 50000
//     },
//     {
//         name: "Mobile",
//         price: 10000
//     },
//     {
//         name: "Tablet",
//         price: 20000
//     }
// ]

// let p1 = {
//     name: "Laptop",
//     price: 50000
// }
// let p2 = {
//     name: "Mobile",
//     price: 10000
// }
// let p3 = {
//     name: "Tablet",
//     price: 20000
// }

// let products = {
//     p1 :{
//         name: "Laptop",
//         price: 50000
//     },
//     p2 :{
//         name: "Mobile",
//         price: 10000
//     },
//     p3 :{
//         name: "Tablet",
//         price: 20000
//     }
// }

let marks = [11, 2, 33, 5, 61, 7, 8, 19, 10];
// marks[10] = 'red'
// marks[11] = 'red'
// let a = [34, 56, "sdsf"]

// marks = ["red", "black", "green", "blue"]

// console.log(marks)

// * ---   Push   ---
// marks.push(2345)
// * ---   Pop    ---
// marks.pop()
// * ---   Unshift    ---
// marks.unshift(0)
// marks.unshift(0,1,2,3,4)
// * ---   Shift  ---
// marks.shift()
// * ---   Splice ---
// marks.splice(0, 4)
// * ---   Slice  ---
// console.log(marks.slice(0, 4))
// * ---   Concat ---
let arr2 = [1, 2, 3, 4, 5]
// marks = marks.concat(arr2)
// * ---   Join   ---
// console.log(marks.join(" next "))
// * ---   Sort   ---
// marks.sort((a, b) => a - b)
// * ---   ForEach   ---
// marks.forEach(function (a) {
//     console.log(a)
// })

// for(let i = 0; i < marks.length; i++){
//     console.log(marks[i])
// }
// * ---   Map    ---
// [11, 2, 33, 5, 61, 7, 8, 19, 10];
// ['abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc'];
newMarks = marks.map(function (a) {
    return "abc"
})
// console.log(newMarks)

// let newMarks = []
// for (let i = 0; i < marks.length; i++) {
//     newMarks.push("abc")
// }
// console.log(newMarks)
// * ---   Find   ---
// let stdMarks = marks.find(function (a) {
//     console.log(a)
//     return a > 15
// })
// console.log(stdMarks)
// * ---   Filter ---
// let stdMarks = marks.filter(function (a) {
//     return a > 15
// })
// console.log(stdMarks)
// * ---   Includes   ---
// let stdMarks = marks.includes(11)
// console.log(stdMarks)
// * ---   Some   ---
// marks.push(61)
// let stdMarks = marks.some(function (a) {
//     return a === 61
// })
// console.log(stdMarks)
// * ---   Every  ---
// let stdMarks = marks.every(function (a) {
//     return a > 1
// })
// console.log(stdMarks)
// * ---   Fill   ---
// marks.fill("abd")
// * ---   Reduce ---
// marks = [1, 2, 3, 4, 5]
// let stdMarks = [1, 2, 3, 4].reduce(function (a, b) {
//     return a * b
// })
// console.log(stdMarks)
// console.log(marks)

// * ---   toString   ---
// let str = marks.toString()
// console.log(str, marks)

let array = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mobile",
        price: 10000
    },
    {
        name: "Tablet",
        price: 20000
    }
]

let products = array.map(function (a) {
    return `
    <div>
    <h1>${a.name}</h1>
    <p>${a.price}</p>
    </div>
    `
})
document.querySelector(".cards").innerHTML = products.join("")
// document.write(products.join(""))