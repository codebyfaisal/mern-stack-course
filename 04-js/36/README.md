# Arrow Function
Arrow function is a shorter way to write a function in JavaScript. It is introduced in ES6 (ECMAScript 6) and is a new syntax for writing functions.

### Syntax

```js
() => {
    // function body
}
```
```js
const ftn = () => {
    // function body
}
ftn();
// save the function in a variable
```

### Examples

```js
const sum = (a, b) => {
    return a + b
};
console.log(sum(1, 2)); // Output: 3
```
**Implicit return**
You can also write the function without the return keyword, When we have one statement so javascript believes that you want to return it.

```js
const sum = (a, b) => a + b;
console.log(sum(1, 2)); // Output: 3
```

```js
const sum = (a, b) => (a + b);
console.log(sum(1, 2)); // Output: 3
```
<br>
<br>

# JavaScript Object
Javascript object is a collection of properties/key-value-pairs. It store every datatype value both primitive and non-primitive.

If you are coming from another programming language, than in javascript object is different from other programming languages.

We can also called **object literal**. mean template using key-value-pairs/object.

In javascript Non-primitive datatypes also behave like object because javascript wraps them inside in the temporary object.

```js
const employee = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY",
    },
    hobbies: ["reading", "swimming", "coding"],
    isMarried: false,
    "company name": "Google",

    getDetails: function () {
       console.log(this); 
    }
}
```
## References
- [MDN Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
