// For loop - use when you know the number of iterations //

// for (let i = 1; i < 7; i++) {
//     console.log(i)
//     console.log("Lap complete")
// }
// console.log("Ended")

// While loop - use when you don't know the number of iterations //

// let number = +prompt("Enter your number")
// while (number < 7) {
//     number = +prompt("Enter your number")
//     console.log("Lap complete")
// }
// console.log("Ended")

// let i = 0;
// while(i < 7) {
//     console.log(i)
//     i++;
// }


// Do while loop - similar to while loop but the loop body will run at least once before checking the condition //

// let number;
// do {
//     number = +prompt("Enter your number")
//     console.log("Lap complete" + number)
// } while (number < 7)

// For in loop - use when you want to loop through the properties of an object //

// const obj = {
//     'first name': "Aman",
//     age: 22,
//     gender: "Male",
//     isMarried: false,
//     address: {
//         city: "New Delhi",
//         state: "Delhi",
//         pincode: 110001
//     }
// }

// console.log(obj['age'])

// for (let key in obj) {
//     console.log(obj[key])
// }


// For of loop - use when you want to loop through the values of an array //

const arr = [1, 2, 3, 4, 5]

for (let value of arr) {
    console.log(value)
}

let str = "Hello";

let obj = {
    name: "Samsung S22 Ultra",
    price: 144999,
    brand: "Samsung",
    color: "Phantom Black",
    storage: "16GB RAM + 512GB ROM",
    display: "6.8 inches, Dynamic AMOLED, 120Hz refresh rate",
    camera: "50MP primary camera + 12MP front camera",
    battery: "5000mAh, Fast charging supported",
    operatingSystem: "Android 12",
    weight: "229g",
    dimensions: "163.3 x 78.1 x 8.9 mm",
    warranty: "1 year",
    description: "Samsung S22 Ultra is a high-end smartphone that offers a range of features such as a powerful processor, high-quality display, long-lasting battery, and advanced camera capabilities.",
}

// for (let i = 0; i < 5 ; i++) {
//     if (i == 2) {
//         // break;
//         continue
//     }
//     console.log(str[i])
// }

// console.log(obj)

for (let i in obj) {
    console.log(obj[i])
}

for (let i of str) {
    console.log(i)
}