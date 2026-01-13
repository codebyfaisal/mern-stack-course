# React Hooks

React hooks are functions that let you use state and other React features in functional components.

- React hooks must be used/called only inside JSX-based functions (Functional Components).
- React hooks must be used at the top level of the function, before any conditional statements/loops.
- We can create custom hooks as well, and their names must start with `use`.

```js
useState;
// Built-in React hook
```

```js
useFilters;
useData;
// Custom hook names example
```

### Built-in Hooks

Below are some of the built-in hooks that are used most of the time:

- useState
- useEffect
- useRef
- useMemo
- useCallback
- useContext
- useReducer

## useEffect

`useEffect` is a React hook that tells React:
**"Do something after the component renders."**

As we know, whenever there is a state change in a component, it re-renders the component (runs all the code again). In some scenarios, we want to run specific code only when a specific state changes, or only once when the component is first shown. We use `useEffect` for this.

### Syntax

```js
useEffect(function, [dependency]);
```

- **dependency**: It tells React when to run the function (based on which state changes).
- When the dependency array is empty `[]`, the function will **only run once** when the component **mounts** (loads for the first time).

### Difference between Page Reload and Component Re-render

- **Page Reload**: When the entire website is reloaded by the browser (user clicks refresh).
- **Component Re-render**: When React updates a specific part of the UI because state changed.

### Example

```js
const print = () => {
  console.log("Component re-rendered");
};

// Case 1: Empty Dependency Array
useEffect(print, []);
// Function will run ONLY ONCE when the component mounts (first render).
// It will NOT run on subsequent re-renders.
```

```js
const [count, setCount] = useState(0);

// Case 2: With Dependency
useEffect(print, [count]);
// Function will run when the component mounts.
// AND it will run whenever the 'count' value changes.
```

# Docs References

- [React Hooks](https://react.dev/reference/react/hooks)
- [useEffect](https://react.dev/reference/react/useEffect)
