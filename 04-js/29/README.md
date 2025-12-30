# Operators

Operators are used to perform operations on variables and values or operands.
Operands can be single or multiple values. For example: `1 + 2` or `1 + 2 + 3`.
At the end, the operation will give a result.

## Syntax using Operators in JavaScript

```cpp
operand1 operator operand2
```

Example:

```
a + b;
```

## Types

Below are the main types of operators in JavaScript:

1. Assignment Operators
2. Arithmetic Operators
3. Comparison Operators
4. Logical Operators
5. Unary Operators

## Assignment Operators

Assignment operators are used to assign values to variables. Example:

```js
let x = 5;
```

In almost all assignment operators, the right side value will be executed first and then assigned to the left side variable.

Assignment operators include:

- `=`
- `+=`
- `-=`
- `*=`
- `/=`
- `%=`
  and so on.

---

## Arithmetic Operators

Arithmetic operators are used to perform mathematical operations like addition, subtraction, multiplication, and division.

Arithmetic operators include:

- `+`
- `-`
- `*`
- `/`
- `%`

```js
let a = 3;
let b = 5;

let c = a + b; // 8
let d = a - b; // -2
let e = a * b; // 15
let f = a / b; // 0.6
let g = a % b; // 3
```

---

## Comparison Operators

Comparison operators are used to compare values.

Comparison operators include:

- `==`
- `===`
- `!=`
- `>`
- `<`
- `>=`
- `<=`

```js
let a = 3;
let b = 5;

let c = a == b; // false
let d = a != b; // true
let e = a > b; // false
let f = a < b; // true
let g = a >= b; // false
let h = a <= b; // true
```

> `!=` checks if **a** is not **equal** to **b**

---

## Logical Operators

Logical operators are used to perform logical operations on boolean values (`true` or `false`).
It works like combinations where the operator decides which combination will be true or false.

> It works on inputs → processing → output.

There will be one or multiple inputs but only one output.

---

### AND `&&`

AND returns **true** only if **all** operands are true.
Otherwise, the result is false.

```
true  && true  ==> true
true  && false ==> false
false && true  ==> false
false && false ==> false
```

```js
let a = true;
let b = false;

let c = a && b; // false
```

```js
let a = true;
let b = false;
let c = false;

let d = a && b && c; // false
// to produce true: all inputs must be true
```

---

### OR `||`

OR returns **true** if **at least one** operand is true.
If all are false, the result is false.

```
true  || true  ==> true
true  || false ==> true
false || true  ==> true
false || false ==> false
```

```js
let a = true;
let b = false;

let c = a || b; // true
```

```js
let a = true;
let b = false;
let c = false;

let d = a || b || c; // true
// to produce true: at least one input must be true
```

---

### NOT `!`

NOT is used to reverse the boolean value.

```
!true  ==> false
!false ==> true
```

```js
let a = true;

let b = !a;
// now b will be false
```

---

## Unary Operators

Unary operators are used to perform operations on a **single operand**.

Examples: `++`, `--`, `!`

> Unary operators work on only one operand.

---

### Increment `++`

It increases the value in memory by 1.
It modifies the original value.

```js
let a = 3;

let b = ++a;
// now b = 4
// a is also 4
```

---

### Decrement `--`

It decreases the value in memory by 1.
It also modifies the original value.

```js
let a = 3;

let b = --a;
// now b = 2
// a is also 2
```

---

### Prefix `++a`

First it increases the value, then assigns it.

```js
let a = 3;

let b = ++a;
// first a becomes 4
// then 4 is assigned to b

console.log(b); // 4
```

---

### Postfix `a++`

First it assigns the value, then increases it.

```js
let a = 3;

let b = a++;
// first b gets 3
// then a becomes 4

console.log(b); // 3
```

## References

- [MDN Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
