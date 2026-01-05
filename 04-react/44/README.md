# JSX (JavaScript XML)

In React, we write HTML inside JavaScript. This is called **JSX**.

Whenever a function in a file returns HTML + JavaScript, the file extension must be .jsx

There are some small differences between HTML and JSX. Since we can't use JavaScript directly in HTML, there are some rules to follow.

### Braces {}

#### How to use JavaScript inside HTML

Whenever writing javascript inside JSX or in HTML, must use {}.

- Correct

```jsx
function App() {
  const a = 123;
  return (
    <div>
      <h1>{a}</h1>
    </div>
  );
}
```

- Wrong

```jsx
function App() {
  const a = 123;
  return (
    <div>
      <h1>a</h1> {/* wrong as this is string not a javascript variable*/}
    </div>
  );
}
```

### class vs className

In HTML, we use `class` attribute to add classes:

```html
<h1 class="heading">Hello</h1>
```

But in JSX, `class` is a reserved keyword in JavaScript (used for creating classes).
So, we use **className** instead:

```jsx
<h1 className="heading">Hello</h1>
```

# useState

In React, normal variables do not update the UI (screen).

If we use a normal variable:

```js
function App() {
  let count = 0;
  count++; // When the button is clicked, the variable changes in memory, but the screen does not update

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => count++}>Increment</button>
    </div>
  );
}
```

To fix this, we use a special variable called **State**.

State is a "Magic Variable" that tells React:
**"Hey! My value has changed. Please re-paint the screen!"** Wherever the value is used, it will update the screen in all those places.

### Syntax

```js
import { useState } from "react"; // must import useState from react at top

const [variable, setFunction] = useState(initialValue);
```

useState is a function that returns an array of two elements:

- **variable**: The current value.
- **setFunction**: A function to update the value.

### Example:

```js
const [count, setCount] = useState(0);

// To update:
setCount(count + 1);

// Whenever the button is clicked, it will update the screen in all those places.

return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
```

# Tailwind CSS

Tailwind CSS is a framework that lets us style our website **without writing CSS files**, similar to Bootstrap but more powerful as it is based on utility-first approach mean there is alot of pre-defined classes for every possible style.

Instead of writing CSS in a separate file, we write **class names** directly in our HTML (JSX).

### Example

**Old Way (CSS):**

```css
.btn {
  background-color: blue;
  color: white;
  padding: 10px;
}
```

**New Way (Tailwind):**

```jsx
<button className="bg-blue-500 text-white p-2">Click Me</button>
```

It saves time and makes development very fast!

# Docs References

- [React](https://react.dev/learn)
- [useState](https://react.dev/reference/react/useState)
- [Tailwind](https://tailwindcss.com/docs)
