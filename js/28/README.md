# Variables

In any programming language, variables are used to store data values like `a` or sentence `hello world` or number `123` or boolean `true`/`false`.
To variables we can also say containers. Just like how we store something in a container in our kitchen e.g container of Masala or container of water. It means each container has a specific purpose.

#### Variable Syntax

```js
let variableName = value;
```

> **variablePurpose** can be `var`, `let`, or `const`. Example:
> `var a = 3;` or `let a = 3;` or `const a = 3;`

> **variableName** can be anything like `{a, b, c}`, `{A, B, C}`, or mixed with numbers like `{a1, b2, c3}` etc.

> **value** can be number, string, boolean, null, undefined, symbol, object, array, function, class etc.

# Keywords

Those words that are predefined and reserved for specific purposes are called **keywords**.

In almost all programming languages, keywords are case-sensitive.
So `var` is different from `Var`.

Also keywords cannot be used as variable names:

```js
var let = 3; // ❌ Wrong
var a = 3;   // ✔️ Correct
```

---

## JavaScript Variables

In JavaScript, variables are created using `var`, `let`, or `const`.

```js
var a = 3;   // old way
let b = 4;   // new and recommended
const c = 5; // constant, value cannot be changed
```

This means we tell the computer “Hey computer go to RAM and create a container for me and put the value `3` in it.”

> ### Note:
>
> In modern JavaScript `var` is not used much anymore, so we will use `let` and `const`.

---

# DataTypes

In programming languages, data types are categories that group different types of values like numbers, text, or true/false.

## JavaScript DataTypes

There are 2 main types:

* **Primitive**
* **Reference / Non-Primitive**

### Primitive DataTypes (7)

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

You can check data type using `typeof`:

```js
let a = 3;
console.log(typeof a); // "number"
```

---

## 1. Number

In JavaScript there are two conceptual types of numbers:

* Integer
* Float/Decimal

```js
let a = 3;    // Integer
let b = 3.14; // Float
```

JavaScript also has:

```js
let x = Infinity; // Infinity
let y = -Infinity;
let z = NaN;       // Not a Number
```

### Infinity

```js
let a = 3 / 0;  // Infinity
let b = -3 / 0; // -Infinity
```

### NaN

`NaN` means an invalid number operation like:

* `0 / 0`
* `0 / undefined`
* `"hello" / 2`

> Mostly Infinity and NaN are used for error handling, not real calculations.

---

## 2. String

String is a sequence of characters or words.

```js
let a = "Hello"; // double quotes
let b = 'Hello'; // single quotes
let c = `Hello`; // backticks
```

```js
let a = 45 + "Hello"; // "45Hello"
let b = "Hello" + 45; // "Hello45"
let c = "45";         // looks like number but it's a string
```

---

## 3. BigInt

BigInt is used for very large integers beyond JavaScript’s safe limit.

* Max safe number: `9007199254740991`
* Min safe number: `-9007199254740991`

Example:

```js
let big = 123456789012345678901234567890n; // BigInt
```

---

## 4. Boolean

Boolean has two values:

```js
let a = true;
let b = false;
```

---

## 5. Undefined

Undefined means a variable is declared but no value is assigned.

```js
let a;              // undefined
let b = undefined;  // also undefined
```

---

## 6. Null

Null means intentional empty value — we know the type, but right now it has no value.

### Null vs Undefined

* **undefined** → variable declared but not assigned any value
* **null** → value is intentionally empty mean we know the type of data the variable will hold but it is empty.

---

## 7. Symbol

Symbol is used to create unique values.

```js
let a = Symbol();
```

Even if two symbols have the same description or value, they are not equal:

```js
let a = Symbol(123);
let b = Symbol(123);

console.log(a === b); // false
```