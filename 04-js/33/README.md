# Strings
Almost every programming language has strings and **they** are used to store text like words, phrases, or sentences.

## String Syntax
In JavaScript, strings are written in three types of quotes.

**Double quotes**

```js
var str = "Hello World";
```

**Single quotes**
```js
var str = 'Hello World';
```

**Backticks or template literals**
```js
var str = `Hello World`;
```
Template literals are used to create multi-line strings, or even we use variables inside the string.
```js
var name = "John";
var str = `Hello ${name}`;
```

## String Indices
Now we already know that string is a collection of characters, so we can also get a single character from the string.

```js
var str = "Hello World";
console.log(str[0]); // H
```

For strings, JavaScript uses indexing, **means** each character in a string has a unique index or also you say that each character **has a** representor.

**Remember indexing always starts from 0.**

```js
var str = "Hello World";
str[0]; // H
str[1]; // e
str[2]; // l
str[3]; // l
str[4]; // o
str[5]; // space
str[6]; // W
str[7]; // o
str[8]; // r
str[9]; // l
str[10]; // d
```
Now you might be considering to change any character in the string, but you can't change character in string, because string is a collection of characters.

`In JAVASCRIPT, strings are immutable.` **means** we can not change the existing string.

You can create a new string, but you cannot modify characters inside the original one.

## Concatenation
Concatenation means adding two or more strings together to form a single string.

```js
var str1 = "Hello";
var str2 = "World";
var str3 = str1 + " " + str2;
console.log(str3 + 3); // Hello World 3
```

## Escape Sequences Characters
```js
console.log("Hello \"World\""); // Hello "World"
```

\n is used to start a new line.
It **does** not work in html but only in console.

```js
console.log("Hello \nWorld"); 
// Hello 
// World
```

```js
console.log("Hello \tWorld");
// Hello    World
```

## String Properties

### Length
Return the length of a string including the whitespace.

```js
var str = "Hello World";
console.log(str.length); // 11
```

## String Methods
While we know that JS String **never changes**, so all of the methods below **we are using** will never change the existing string but will return a new string.

### Uppercase and Lowercase
```js
var str = "Hello World";
console.log(str.toUpperCase()); // HELLO WORLD
console.log(str.toLowerCase()); // hello world
```

### Trim
Remove whitespace from the beginning and end of a string. (not from the middle of the string)

```js
var str = "   Hello World   ";
console.log(str.trim()); // Hello World
```

### Slice
Return the part of the string between two indexes.
```js
str.slice(start, end);
```
```js
var str = "Hello World";
console.log(str.slice(0, 5)); // Hello
console.log(str.slice(3, 8)); // lo Wo
```

### Replace
```js
var str = "Hello World";
console.log(str.replace("Hello", "Hi")); // Hi World
```

### CharAt
```js
var str = "Hello World";
console.log(str.charAt(0)); // H
```

### IndexOf
```js
var str = "Hello World";
console.log(str.indexOf("o")); // 4
// always return first index
```

**List of common JavaScript string methods** (names only):
for detail you can check them in [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

* `length`
* `charAt`
* `charCodeAt`
* `at`
* `concat`
* `includes`
* `endsWith`
* `startsWith`
* `indexOf`
* `lastIndexOf`
* `match`
* `matchAll`
* `normalize`
* `padStart`
* `padEnd`
* `repeat`
* `replace`
* `replaceAll`
* `search`
* `slice`
* `split`
* `substring`
* `toLowerCase`
* `toUpperCase`
* `trim`
* `trimStart`
* `trimEnd`
* `valueOf`