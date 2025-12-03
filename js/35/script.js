// * ---   Spread Operator   ---
// const sum = (...args) => {
//     let total = 0;
//     for (let arg of args) total += arg
//     return total;
// }

// console.log(sum(1, 2, 3)); // Output: 6

// * ---   Object.assign Copying the Object with actual object(with values)   ---
// const course = {
//     name: "JavaScript",
//     price: 100
// }

// const course1 = Object.assign(course);
// console.log(course1);

// * ---   ---
// const course1 = course
// console.log(course)
// course.name = "PHP"
// console.log(course1)

// let course = "JavaScript";

// let course1 = course;
// console.log(course);
// console.log(course1);
// course = "PHP";
// console.log(course1);
// console.log(course);

// * ---   Why Object is mutable when stored in const   ---
// const course = {
//     name: "JavaScript",
//     price: 100
// }

// const course1 = course;

// course1.name = "PHP";
// console.log("course", course);
// console.log("course1", course1);

// const course = {
//     name: "JavaScript",
//     price: 100
// }

// Spread operator and Object.assign() make a shallow copy
// * ---   Spread operator with Objects   ---
// // const course1 = { ...course };
// const course1 = Object.assign({}, course);
// course1.name = "PHP";
// console.log("course", course);
// console.log("course1", course1);

// * ---   Spread operator with Arrays   ---
// const marks = [11, 2, 33, 5, 61, 7, 8, 19, 10];
// const newMarks = [...marks];
// console.log(newMarks);

// * ---   Object Destructuring   ---
// const course = {
//     name: "JavaScript",
//     price: 100,
// }

// let { name, price } = course;
// let { price } = course;
// let { teacher } = course;
// let price = course.price;
// name = "PHP";
// console.log(name, price);
// console.log(price);
// console.log(teacher);

// const keys =Object.keys()
// console.log(keys[0]);

// * ---   Array Destructuring   ---
// const marks = []
// const marks = ['Faisal', 34]
// const [age, name] = marks
// console.log(age);
// console.log(name);

// * ---   Deleting Properties/key-value-pairs from object   ---
// const car = {
//     make: "Honda",
//     model: "Civic",
//     year: 2020
// }

// console.log(car)
// delete car.make

// console.log(car.make)

// const car = {
//     make: "Honda",
//     model: "Civic",
//     year: 2020
// };

// car.date = car.year;
// delete car.year;

// console.log(car);

// 0x023d3 = {
//     model: "Civic",
//     year: 2020
// }

// const car = 0x023d3
// car = 0x023d4

// delete car.make

// * This is just an example not actual code in js
// ----------------------------------------------
// 0x023d3 = {
    //     model: "Civic",
    //     year: 2020
    // }

// const car = 0x023d3
// car = 0x023d4

// delete car.make
// ----------------------------------------------
