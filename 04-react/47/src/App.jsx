// import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Home from "./components/Home";
import { CounterContext } from "./context/CounterContext";

function App() {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div className="app">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Home />
    </div>
  );
}

export default App;
