// * --- callbacks ---
// const sum = (a, b) => {
//     return a + b;
// }

// const getResult = (r) => {
//     console.log(r(1,2))
// }

// getResult(sum)

// * --- Promises ---
// const promise = new Promise((resolve, reject) => {
//     const random = Math.random() * 10

//     if (random > 5) resolve()
//     reject()

//     // resolve(23)
//     // reject(34)
// })

// const resolve = () => {
//     console.log("Promise is resolved")
// }
// const reject = () => {
//     console.log("Promise is reject")
// }
// const final = () =>{
//     console.log("Promise is End")
// }

// promise.then(resolve).catch(reject).finally(final)

// * --- API ---
// const result = fetch('https://jsonplaceholder.typicode.com/todos/1')

// console.log(result)

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((result) => result.json())
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("Request ended"))

// console.log(12)

// * --- Async Await ---
// const ftn = async () => {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products')
//         console.log(response)
//         const result = await response.json()

//         //        "userId": 6,
//         // "id": 116,
//         // "title": "ipsa dolores vel facilis ut",
//         // "completed": true
//         const data = result.map((item) => {
//             return `
//                 <p>${item.id}</p>
//                 <h1>${item.title}</h1>
//                 <br>
//             `
//         })

//         document.querySelector('.container').innerHTML = data.join(' ')
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     } finally {
//         console.log("Ended")
//     }

//     console.log("Function ending")
// }

// ftn()