# Browser Storage

Browsers provide storage mechanisms to save data with different features and purposes. Normally, when a website is reloaded, its data is reset. This creates a problem when we want to preserve certain information on the user’s computer—for example, if a user changes the website theme from light to dark, the theme would return to the default after a reload. To solve this, browsers offer different types of storage for each website, such as localStorage, sessionStorage, cookies, and cache storage, each designed for specific use cases.

# Local Storage & Session Storage

Both storages save data so when website reload we have still the access to that store data

* `localStorage` which store data even website or browser close or computer shutdown but with uninstallation of browser will getting to loss of that data.
* stays after browser close
* `sessionStorage` which store data but until website or tab open
* cleared when tab closes

### Save Data

```js
localStorage.setItem("name", "Ali");
sessionStorage.setItem("age", 20);
```

### Get Data

```js
let name = localStorage.getItem("name");
let age = sessionStorage.getItem("age");

console.log(name, age);
```

### Remove Data

```js
localStorage.removeItem("name");
sessionStorage.clear();
```

<br>
<br>

# Modules (Import / Export)

Way of giving access to other files and to use the file own code like functions, object, variables.

### Export (file: `math.js`)

Allowing other files to access this function in their own code.

```js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
```

### Import (file: `app.js`)

Accessing other files codes.

```js
import { add, sub } from "./math.js";

console.log(add(5, 3));
```

⚠ Use `type="module"` in HTML:

```html
<script type="module" src="app.js"></script>
```

<br>
<br>

# JSON (JavaScript Object Notation)

### Convert Object → JSON

```js
const user = { name: "Ali", age: 24 };

const jsonData = JSON.stringify(user);
console.log(jsonData);
```

### Convert JSON → Object

```js
const objData = JSON.parse(jsonData);
console.log(objData.name);
```

📌 Used heavily with **APIs & Storage**
📌 Whenever we saving data into browser storage or sending data into API we need to convert it into a string
📌 Similarly when we get the data that are programming code then we need to parse/convert that string to a programming code.

## Math Object

Math is javascript GLOBAL object which have multiple functions and properties

```js
Math.round(4.6); // 5
Math.floor(4.9); // 4
Math.ceil(4.1); // 5
Math.random(); // generate random number between 0.0 to 1.0
```

### Random Number (1–10)

```js
let num = Math.floor(Math.random() * 10) + 1;
console.log(num);
```

### MDN References

* [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
* [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
* [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
* [Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
* [JSON Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
* [Math Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

---