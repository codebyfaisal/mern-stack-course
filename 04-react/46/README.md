# Form Handling

## Controlled Components

In react, input elements like `<input>` and `<textarea>` or almost all form fields maintain their own state mean as we write it storing and showing but we can control it using react state which also called controlled components.

### Example

```jsx
const [email, setEmail] = useState("");

<input
    type="email"
    placeholder="Enter your email"
    value={value}
    onChange={() => setEmail()}
>
```

- **value**: the current value of the input.
- **setValue**: function to update the value when user types.

## List Rendering

To render multiple items that store in a array or you may say a list we use `map()` method to render list of items.

### Example

```jsx
const fruits = ["apple", "banana", "orange"];

return (
  <ul>
    {fruits.map((fruit) => (
      <li key={fruit}>{fruit}</li>
    ))}
  </ul>
);
```
> it is not just for ul, as you can use it for div's, table or other elements as well

## Conditional Rendering

Many times we need to show the item on some condition or perform some rendring based on some condition, so we can use logical `&&` operator or ternary operator `? :` to show or hide elements based on condition.

### Example

```jsx
// using ternary
{
  isLoggedIn ? <button>Logout</button> : <button>Login</button>;
}

// using logical &&
{
  isAdmin && <button>Delete</button>;
}
```

# docs references

- [react forms](https://react.dev/reference/react-dom/components/input)
- [useEffect](https://react.dev/reference/react/useEffect)
- [rendering lists](https://react.dev/learn/rendering-lists)
- [conditional rendering](https://react.dev/learn/conditional-rendering)
