# JSX (JavaScript XML)

In React, we can write JavaScript directly inside HTML, which is called **JSX**.

### JSX Rules

JSX has a few important rules that you must follow:

- Always Component name must start with capital letter
- A function must return only one tag.
  - Use `<>...</>` if you want to return multiple tags.
- Always close your tags, or React will throw an error.
- You must use braces `{}` to insert JavaScript inside JSX.
- Use `className` instead of `class` to add CSS classes in JSX.
- For dynamic variables, you should use `useState` for state management in React.

### Components

Components are one of the basic features of React. They allow us to split our code into smaller, reusable pieces. In React, every component is a JavaScript function that returns JSX.

### Using JavaScript in JSX (Braces `{}`)

When writing JavaScript inside JSX, you must enclose the javascript code in `{}`.

- **Wrong**:

```jsx
function App() {
  const a = 123;
  return (
    <div>
      <h1>a</h1>
      {/* This is wrong because it's a string, not a JavaScript variable */}
    </div>
  );
}
```

- **Correct**:

```jsx
function App() {
  const a = 123;
  return (
    <div>
      <h1>{a}</h1> {/* This is correct because it's a JavaScript variable */}
    </div>
  );
}
```

### `class` vs `className`

In HTML, we use the `class` attribute to add classes:

```html
<h1 class="heading">Hello</h1>
```

But in JSX, `class` is a reserved keyword in JavaScript. So, instead of `class`, you must use **`className`**:

```jsx
<h1 className="heading">Hello</h1>
```

### `useState`

In React, normal variables don’t automatically update the UI when their value changes.

To fix this, we use **State**. State is a "magic variable" that tells React:
**"Hey! My value has changed. Please update the UI!"** React will automatically re-render the UI wherever the state is used.

- useState is one the react hooks.

### Syntax

```js
import { useState } from "react"; // Import useState from React at the top

const [variable, setFunction] = useState(initialValue);
```

`useState` is a function that returns an array with two elements:

- **`variable`**: The current value.
- **`setFunction`**: A function to update the value.

### Example:

```js
const [count, setCount] = useState(0);

// To update:
setCount(count + 1);

// React will update the screen wherever the `count` is used.

return (
  <div>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
```

## Props

As we know that a JSX component is nothing but a JavaScript function that returns JSX, so we can pass parameters to it.
**Props** (short for Properties) are arguments passed into React components.

Think of them exactly like **arguments in a function**.

### Syntax

**1. Passing Props (Parent):**

```jsx
<Button value="Click Me" uiType="primary" />
```

**2. Receiving Props (Child):**
There are two ways to receive props:

**Option A: Using `props` object**

```jsx
function Button(props) {
  return <button>{props.value}</button>;
}
```

**Option B: Destructuring (Recommended)**
Receive props but before using it destructure it.

```jsx
function Button({ value, uiType }) {
  return <button className={uiType}>{value}</button>;
}
```

> **Note:** Props are **Read-Only**. You cannot change them inside the child component.

# Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows you to style your website **without writing custom CSS files**. It’s similar to Bootstrap but much more powerful because it provides a huge range of pre-defined utility classes for almost every possible style.

Instead of writing CSS in a separate file, you write **class names** directly in your HTML (JSX). This way we can save developing time and speeds up development!

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

# Docs References

- [React Docs](https://react.dev/learn)
- [useState Docs](https://react.dev/reference/react/useState)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---
