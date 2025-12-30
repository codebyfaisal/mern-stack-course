# Events & Timing

Events are actions that happen in the browser, like clicking a button or moving the mouse. By using events, we can tell the browser to "listen" for these events and run code when they happen or trigger or occur.

## Timing Events

We can run code after a delay or repeat it at intervals.

| Method            | Description                                      |
| :---------------- | :----------------------------------------------- |
| `setTimeout()`    | Runs a function **once** after a delay.          |
| `clearTimeout()`  | Stops a `setTimeout` from running.               |
| `setInterval()`   | Runs a function **repeatedly** at set intervals. |
| `clearInterval()` | Stops a `setInterval` from running.              |

```js
// Runs after 2 seconds
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
```

## Mouse Events

These events happen when the user interacts with the mouse.

| Event       | Description                                         |
| :---------- | :-------------------------------------------------- |
| `click`     | run function when an element is clicked.            |
| `dblclick`  | run function on a double click.                     |
| `mousedown` | run function when the mouse button is **pressed**.  |
| `mouseup`   | run function when the mouse button is **released**. |
| `mousemove` | run function when the mouse moves over an element.  |
| `mouseover` | run function when the mouse **enters** an element.  |
| `mouseout`  | run function when the mouse **leaves** an element.  |

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("Button Clicked!");
});
```

## Form & Input Events

These are used with input fields to track user changes.

| Event    | Description                                                        |
| :------- | :----------------------------------------------------------------- |
| `input`  | run function **immediately** when the value changes.               |
| `change` | run function when the input loses focus and the value has changed. |

```js
const input = document.getElementById("myInput");

input.addEventListener("input", (e) => {
  console.log(e.target.value);

  // Logs every keystroke or when input value changes

  // this will work on all types of input and textarea fields
});
```

## Adding Event Listeners

There are three ways to add events to elements.

1. Using attribute inline HTML
2. Using JavaScript as targeted element attribute
3. Using `addEventListener` method in JavaScript

### Inline JavaScript

```html
<body>
  <button onclick="console.log('Button Clicked!')">Click Me</button>
</body>
```

### In JavaScript as targeted element attribute

```js
const btn = document.getElementById("btn");
btn.onclick = () => console.log("Button Clicked!");
```

### In JavaScript using addEventListener method

- This is mostly used method in modern JavaScript
- But in react like framework we use Inline JavaScript directly in HTML.
- There is one Advantage of using addEventListener method that is we can add multiple listeners.

```js
const btn = document.getElementById("btn");
btn.addEventListener("click", () => console.log("Button Clicked!"));
```

```js
btn.addEventListener("click", () => console.log("Button Clicked!"));
btn.addEventListener("click", () => console.log("Button Clicked Again!"));
```

We use `addEventListener` to attach events to elements. This is better than using inline JavaScript because we can add multiple listeners.

| Method                  | Description               |
| :---------------------- | :------------------------ |
| `addEventListener()`    | Attach an event listener. |
| `removeEventListener()` | Remove an event listener. |

- We can remove event listener by storing function in variable.

```js
const ftn = () => console.log("Button Clicked!");

btn.addEventListener("click", ftn);
btn.removeEventListener("click", ftn);
```

---

## References

- [MDN Events](https://developer.mozilla.org/en-US/docs/Web/Events)
