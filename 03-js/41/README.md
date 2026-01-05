# Synchronous vs Asynchronous

Synchronous and Asynchronous are ways to handle tasks in JavaScript or simply say how the code will be executed, either line by line (meaning the next line will not start running until the previous line is finished) or just continue to the next line (without waiting for the previous line to finish).

| Feature       | Synchronous                                        | Asynchronous                                                               |
| :------------ | :------------------------------------------------- | :------------------------------------------------------------------------- |
| **Execution** | Line by line (blocking).                           | Doesn't wait (non-blocking).                                               |
| **Wait Time** | Waits for one task to finish before starting next. | Moves to next task while waiting for long operations (like data fetching). |
| **Example**   | `console.log`                                      | `setTimeout`, `fetch`, `Promises`                                          |

> **Note:** JavaScript is single-threaded (synchronous) by default but manages asynchronous operations using the Event Loop.

# Callbacks

A callback is a function passed as an argument to another function, which is then executed later.

```js
function display(result) {
  console.log(result);
}

function calculate(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

calculate(5, 5, display);
```

# Promises

A Promise represents the eventual completion (or failure) of an operation and its resulting value.

## Promise States

| State                    | Description                                    |
| :----------------------- | :--------------------------------------------- |
| **Pending**              | Initial state, neither fulfilled nor rejected. |
| **Fulfilled** (Resolved) | The operation completed successfully.          |
| **Rejected**             | The operation failed.                          |

## Promise Methods

| Method       | Description                                                                         |
| :----------- | :---------------------------------------------------------------------------------- |
| `.then()`    | Runs if the promise is **resolved**.                                                |
| `.catch()`   | Runs if the promise is **rejected**.                                                |
| `.finally()` | Runs **always**, whether the promise is **resolved**/**fulfilled** or **rejected**. |

```js
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Success!");
  else reject("Data fetch failed.");
});

myPromise
  .then((data) => console.log(data)) // Runs if the promise is resolved
  .catch((error) => console.log(error)) // Runs if the promise is rejected
  .finally(() => console.log("Always runs.")); // Runs always
```

> In real world code, resolve mean `success or no error` and reject mean `failure or error`.

# Fetch API

The `fetch()` method allows us to make network or HTTP/HTTPS requests to servers (APIs), Which returns a Promise.

```js
fetch("https://api.example.com/data")
  .then((response) => response.json()) // Convert to JSON
  .then((data) => console.log(data)) // Use data
  .catch((error) => console.log(error)); // Handle error
```

# Async / Await

`async` and `await` build on top of Promises to make asynchronous code look and behave like synchronous code. It's often easier to read.

| Keyword | Description                                  |
| :------ | :------------------------------------------- |
| `async` | Makes a function return a Promise.           |
| `await` | Pauses execution until the Promise resolves. |

```js
const getData = async () => {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
};

getData();
```

## Try Catch

`try` and `catch` are used to handle errors. Whenever we expect a problem in the code, we use `try` and `catch` to prevent the code or program from stopping or breaking.

```js
const getData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();
```

---

## References

- [MDN Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
