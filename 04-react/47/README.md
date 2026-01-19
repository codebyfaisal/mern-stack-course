# React Router

One of React major feature is SPA(Single Page Application). Where we can create multiple page appllication but without reloading the website, and for this functionality we need React router, is a library/package for routing in react apps. it allows us to navigate between pages without reloading the browser.

### Installation

```bash
npm install react-router-dom
```

### Setup

Wrap <App/> with `BrowserRouter` in `main.jsx` to pass full app as children to react router.

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>;
```

## Routes

`Routes` and `Route` components to define our pages and implement routing.

- Routes: it is a wrapper component that holds all the routes.
- Route: it is a component that defines a route.

### Example

```jsx
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

## Navigation / Link

In pure html we using <a href=""></a> which help to navigate to another pag.e but reload the tha tab/page, so know if using a tag will work in react router dom but the problem is that it will reloading the page and here is we have <Link to=""></Link> element which help to navigate between pages without reloading the website.

### Example

```jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* use it in html */}
      <Link to="/about">go to about</Link>
    </>
  );
}
```

Similarly we can also use `useNavigate` programatically to navigate beween pages without page reloading.

### Example

```jsx
import { useNavigate } from "react-router-dom";

function ButtonLink() {
    const navigate = useNavigate()

    return (
        <button onClick={()=>navigate("/about")}>go to about page</Link>
     );
}
```

## Dynamic Routing

Sometimes we need a dynamic data page where it fetch the data based on url, like if we have many products and want to open detailPage for one product. We can't create millions of routes for millions of products. So we use dynamic segments.

### Example

```jsx
// inside Routes
<Route path="/products/:id" element={<ProductDetail />} />

{/* we can name what we wantbut in syntax of /:variableName*/}
```

### **useParams**

To get that `:id` inside the `ProductDetail` component, we use `useParams` hook. It return object with that dynamic value.

### Example

```jsx
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return <h1>Product Id is: {id}</h1>;
};
```

### **useSearchParams**

Just like in google search we see `?q=something` in url. That is search params (Query strings). To read or update them we use `useSearchParams`. It works like `useState`.

### Example

```jsx
import { useSearchParams } from "react-router-dom";

const [searchParams, setSearchParams] = useSearchParams();

const name = searchParams.get("name");
```

# docs references

- [react router docs](https://reactrouter.com/en/main)
- [useParams](https://reactrouter.com/en/main/hooks/use-params)
- [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)
