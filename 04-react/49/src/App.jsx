import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  // let data = null;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
      );
      // data = response.data;
      // console.log(data);
      setData(response.data);
    };

    fetchData();
  }, []);

  console.log(data);

  if (!data) return <i>Loading</i>;

  return (
    <main>
      <h2>App</h2>
      {data &&
        data.map((todo) => (
          <div key={todo.id} className="todo">
            Title: {todo.title}
          </div>
        ))}
    </main>
  );
};

export default App;
