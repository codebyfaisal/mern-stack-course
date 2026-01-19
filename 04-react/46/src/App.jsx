import React, { useEffect, useState } from "react";
import { products } from "./db/products.js";
import Card from "./components/Card";
import Table from "./components/Table.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [light, setLight] = useState(() => {
    return localStorage.getItem("theme") !== "dark";
  });

  useEffect(() => {
    const theme = light ? "light" : "dark";
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [light]);

  return (
    <>
      {/* <h1>Products</h1> */}

      {/* <button
        type="button"
        onClick={() => setLight(prev => !prev)}
      >
        {light ? "Light" : "Dark"}
      </button> */}

      {/* <Card cards={products} />  */}

      {/* <Table data={products} /> */}

      <Form />
    </>
  );
}

export default App;
