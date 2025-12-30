# Functions

In programming functions are block of codes or statements that perform a specific task. It will executed when it is called.

* Functions are used to break a program into smaller parts.
* Functions are useful because it helps to reuse the code.

### Syntax

```js
function functionName() {
    // Function body
}
```

* `function` keyword
* function name with parenthesis `()`
* curly braces `{}` which represent function body

### Note

> Function name is just like variable name.
> A whole function is also called a **function definition**.

### Example

```js
function helloFunction() {
    console.log("Hello World");    
}

helloFunction(); // Function call
```

> #### Function call
>
> function name with parenthesis `()`

---

## Parameters vs Arguments

| Parameters                                                                       | Arguments                                                                       |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Values that are received to a function when it is called.                        | Values that are passed to a function when it is called.                         |
| `function helloFunction(param1, param2) {}`                                      | `helloFunction(arg1, arg2)`                                                     |
| Multiple parameters can be passed to a function by separating them with a comma. | Multiple arguments can be passed to a function by separating them with a comma. |

---

## Function with parameters

```js
function helloFunction(name) {
  console.log("Hello " + name); 
}

helloFunction("John"); // Function call
```

---

## Function Return

A simple function without a return statement will end after executing the code and it will return `undefined` automatically. But we can also return a value from a function when it executes/ends.

```js
function helloFunction(name) {
  return "Hello " + name;
}

console.log(helloFunction("John")); // Function call
```

We can also save the returned value in a variable.

```js
function helloFunction(name) {
  return "Hello " + name;
}

let a = helloFunction("John"); // call the function and save the return value in the variable

console.log(a);
```

## Scope of the code in a function
### Global Scope

```js
let a = 10; // Global variable

function helloFunction() {
    console.log(a); // Accessing global variable
}

helloFunction();

console.log(a); // Accessing global variable
```

### Local Scope

```js
let a = 10; // Global variable

function helloFunction() {
    let b = 20; // Local variable
    console.log(a);
    console.log(b); // Accessing local variable
}

console.log(a); // Accessing global variable is ok
console.log(b); // Throw error

helloFunction();

console.log(a); // Accessing global variable
```

> Accessing local variable that is inside the function is not allowed to use outside the function or also say **local variable is not exist outside the function**
## References
- [MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
