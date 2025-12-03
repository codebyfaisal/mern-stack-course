# Primitive vs Non-Primitive

| Feature                 | **Primitive Data Types**                         | **Non-Primitive Data Types**                                  |
| ----------------------- | ------------------------------------------------ | ------------------------------------------------------------- |
| **How value is stored** | Stores the **actual value** in memory            | Stores a **reference (address)** to the value in memory       |
| **Mutability**          | **Immutable** (cannot be changed directly)       | **Mutable** (values can be changed)                           |
| **Data Types**          | Number, String, Boolean, Null, Undefined, Symbol | Objects, Arrays, Functions, Dates                             |
| **Comparison**          | Compared **by value**                            | Compared **by reference**                                     |
| **Examples**            | `let a = 3;`<br>`let b = "Hello";`               | `let arr = [1, 2, 3];`<br>`let obj = {name: "Faisal"};`       |
| **Copy behavior**       | Copy creates a **new independent value**         | Copy creates a **new reference pointing to the same object**  |

<br>
<br>

---
<br>
<br>


# Destructuring
Destructuring is a way to extract values from arrays and objects and assign them to variables.

```js
const arr = [1, 2, 3];

const [a, b, c] = arr;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
```

```js
const obj = {
    name: "John",
    age: 30
};

const { name, age } = obj;

console.log(name); // Output: "John"
console.log(age); // Output: 30
```

<br>
<br>

# Spread Operator
Spread operator is a way to spread values from an array or object into another array or object.

> Changes in New (array or object) created by spread operators or Object.assign() will not affect the original (array or object)

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]
```

```js
const sum = (...args) => {
    let total = 0;
    for (let arg of args) total += arg
    return total;
}

console.log(sum(1, 2, 3)); // Output: 6
```
---