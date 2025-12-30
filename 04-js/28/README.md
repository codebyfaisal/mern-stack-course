# Variables

In any programming language, variables are used to store data values like `a` or sentence `hello world` or number `123` or boolean `true`/`false`.
We can also say variables are containers. Just like how we store something in a container in our kitchen, e.g., container of Masala or container of water. It means each container has a specific purpose.

#### Variable Syntax

```js
let variableName = value;
```

> **variablePurpose** can be `var`, `let`, or `const`. Example:
> `var a = 3;` or `let a = 3;` or `const a = 3;`

> **variableName** can be anything like `{a, b, c}`, `{A, B, C}`, or mixed with numbers like `{a1, b2, c3}` etc.

> **value** can be number, string, boolean, null, undefined, symbol, object, array, function, class etc.

---

## Rules of Naming Variables

1. A variable name must start with a letter, underscore `_`, or dollar sign `$`.
2. A variable name cannot start with a number.
3. A variable name can only contain alpha-numeric characters and underscore (A–Z, a–z, 0–9, _).
4. A variable name is case-sensitive.
5. A variable name cannot be a reserved keyword.
6. A variable name should be short and descriptive(max 30 characters).
7. A variable name should be unique within a program.

---

# Keywords

Those words that are predefined and reserved for specific purposes are called **keywords**.

Keywords are case-sensitive.
So `var` is different from `Var`.

Keywords cannot be used as variable names:

```js
var let = 3; // ❌ Wrong
var a = 3;   // ✔️ Correct
```

---

# JavaScript Variables

```js
var a = 3;   // old way
let b = 4;   // new and recommended
const c = 5; // constant (cannot change value)
```

This means we tell the computer:
“Hey computer, go to RAM and create a container for me and put the value `3` in it.”

> ### Note:
>
> In modern JavaScript, `var` is not used much anymore, so we use `let` and `const`.

---

# DataTypes

Data types are categories that group different types of values like numbers, text, or true/false.

## JavaScript DataTypes

There are 2 main types:

* **Primitive**
* **Reference / Non-Primitive**

---

# Primitive DataTypes (7)

1. Number
2. String
3. BigInt
4. Boolean
5. Null
6. Undefined
7. Symbol

```js
let a = 3;        // Number
let b = "Hello";  // String
let c = true;     // Boolean
let d = null;     // Null
let e;            // Undefined
let f = Symbol(); // Symbol
```

Check data types using:

```js
console.log(typeof a); // "number"
```

---

## 1. Number

Two conceptual types:

* Integer
* Float / Decimal

```js
let a = 3;
let b = 3.14;
```

Other number values:

```js
let x = Infinity;
let y = -Infinity;
let z = NaN; // Not a Number
```

### Infinity

```js
let a = 3 / 0;  // Infinity
let b = -3 / 0; // -Infinity
```

### NaN

Produced by invalid operations like:

* `0 / 0`
* `"hello" / 2`

> Mostly Infinity and NaN are used for error handling.

---

## 2. String
Collection of characters or sequence of characters or collection of words.
```js
let a = "Hello";
let b = 'Hello world';
let c = `H`;
```

### Concatenation
```js
let a = 45 + "Hello"; // "45Hello"
let b = "Hello" + 45; // "Hello45"
let c = "45";         // string, not number
```

---

## 3. BigInt

```js
let big = 1234567890123456789012345678n;
```

---

## 4. Boolean

```js
let a = true;
let b = false;
```

---

## 5. Undefined

```js
let a;
let b = undefined;
```

---

## 6. Null

```js
let a = null;
console.log(typeof a); // "object"
```

> **Note:**
> `null` is not an object.
> Only its `typeof` returns `"object"` — this is a bug in the language.
> Most JavaScript developers consider this a mistake from the early days of JavaScript.

### Null vs Undefined

* **undefined** → variable declared but not assigned
* **null** → intentional empty value

---

## 7. Symbol

Creates unique values:

```js
let a = Symbol();
let b = Symbol(123);

console.log(a === b); // false
```

---

# Reference / Non-Primitive / Objects
In JavaScript Objects are collections of key-value pairs or properties.

Objects are reference types.

For easy understanding, We can also say an object is a container of different or similar variables/values separated by commas.

Object = **key-value pairs**.

> Note: When I say “variables inside object”, it is only for easy understanding. They are actually called **properties**, not real variables.

```js
let obj = {
    a: 3,
    b: "Hello",
    c: true,
    d: null,
    e: undefined,
    f: Symbol(),
    g: () => "Hello"
};
```

Another example:

```js
let obj = {
    "a": 3,
    "greeting": "Hello"
};
```

If we see that we store multiple values of different data types in one container, it is called **object**.
## References
- [MDN Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
