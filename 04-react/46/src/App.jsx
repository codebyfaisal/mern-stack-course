  import React, { useEffect, useState } from 'react'
  import { products } from './db/products.js'
  import Card from "./components/Card"

  function App() {
    const [light, setLight] = useState(true)

    useEffect(() => {
      document.body.className = localStorage.getItem('theme')
      localStorage.setItem('theme', !light && "dark")
    }, [light])

    return (
      <>

        <h1>Products</h1>
        <button
          type='button'
          onClick={() => setLight(!light)}
        >
          {light ? "Light" : "Dark"}
        </button>
        <Card cards={products} />
      </>
    )
  }

  export default App
