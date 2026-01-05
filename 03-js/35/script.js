// let mk = null;
// let md = null;
// function car(make, model) {
//     // const c = {
//     //     make,
//     //     model
//     // }
//     // return {
//     //     make,
//     //     model
//     // }

//     // return [make, model]

//     // mk = make;
//     // md = model;

//     // return c
// }

// const  rt = car("Honda", "Civic");
// console.log(rt);

// * ---   Arrow Function   ---
// const sum = (a, b) => {
//     return a + b
// }

// console.log(sum(3, 4));

// * ---   Function in Object   ---
// const person = {
//     name: "",
//     age: 0,
//     init: (name, age) => {
//         person.name = name;
//         person.age = age;

//         console.log(person);
//     }
// }

// person.init("Faisal", 34);
// console.log(person);

// const person = {
//     name: "",
//     age: 0,
//     init(name, age) {
//         this.name = name;
//         this.age = age;

//         console.log(person);
//     }
// }

// person.init("Faisal", 34);
// console.log(person);

// * ---   Factory Function   ---
// function createPerson(name, age) {
//     const person = {
//         name,
//         age,
//     }
//     return person

//     // return {
//     //     name,
//     //     age,
//     // }
// }

// const person = createPerson("Faisal", 34);
// console.log(person);

// const createCar = (make, model) => {
//     return {
//         make,
//         model
//     }
// }

// const car1 = createCar("Honda", "Civic");
// console.log(car1);

// * ---   this   ---
// const person = {
//     name: "fff",
//     age: 0,
//     init(name, age) {
//         this.name = name;
//         this.age = age;
//         function init2() {
//             console.log(this, 2);
//             // print window object
//         }
//         init2();
//     }
// }
// console.log(person);

// person.init("Faisal", 34);
// console.log(this);

// function myFunction() {
//     console.log(this);
// }

// myFunction();

// const person = {
//     name: "",
//     age: 0,
//     init(name, age) {
//         this.name = name;
//         this.age = age;
//         const init2 = () => {
//             console.log(this, 2);
//             // print this of the parent function
//         }
//         init2();
//     }
// }

// person.init("Faisal", 34);

// function Car(make, model) {
//     console.log(make, model);
// }

// const car1 = new Car("Honda", "Civic");
// console.log(car1);

// const course = {
//     name: "JavaScript",
//     price: 100,
//     function () {
//         console.log(this);
//     }
// }
//  course = {
//     name: "JavaScript",
//     price: 100,
//     function () {
//         console.log(this);
//     }
// }

// * ---   Constructor Function (another way to create object)   ---
// function Car(make, model) {
//     this.make = make;
//     this.model = model;
//     this.move = function () {
//         console.log('move');
//     }
//     // return this
// }

// // const car1 = Car("Honda", "Civic");
// const car1 = new Car("Honda", "Civic");
// // console.log(car1.make, car1.model);
// car1.move();
// * ---   Constructor Method   ---
// console.log(car1.constructor);

// const employee = {
//     name: "John",
//     age: 30,
//     address: {
//         city: "New York",
//         state: "NY",
//     },
//     hobbies: ["reading", "swimming", "coding"],
//     isMarried: false,
//     "company name": "Google",

//     getDetails: () => {
//         console.log(this);
//     }
// }

// employee.getDetails();
// // console.log(employee.constructor);

// const c = new Function("make", "model", `
//                 this.make = make;
//                 this.model = model;
//                 this.move = function () {
//                                 console.log('move');
//                             }
// `)

// const car1 = new c("Honda", "Civic");
// console.log(car1.make, car1.model);
// car1.move();

// const car = {
//     make: "Honda",
//     model: "Civic",
//     year: 2020,
//     move() {
//         console.log(this, '\n----------\n');
//         function inner() {
//             console.log(this);
//         }
//         inner();
//     },
//     toUpperCase() {
//         console.log(make);
//     }
//     // move: function () { }
//     // move:()=>{}
// }

// car.move();
// console.log(car);

// function inner() {
// //  every function has it's own this reference to global object (Node enoviremont)
// //  every function has it's own this reference to window object (Browser)
//     console.log(this);
// }
// inner()

// In node enoviremont this have empty object {}
// console.log(this)


// const car = {
//     make: "Honda",
//     model: "Civic",
//     year: 2020,
//     move() {
//         console.log(this);
//     }
// }
