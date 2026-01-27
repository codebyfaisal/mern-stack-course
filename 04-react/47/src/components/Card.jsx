import React from "react";
import Button from "./Button";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Card = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt="product"
      />
      <h3>Product Name</h3>
      <p>Product Description</p>
      <Button label="Add to Cart" onClick={() => setCount(count + 1)} />
    </div>
  );
};

export default Card;
