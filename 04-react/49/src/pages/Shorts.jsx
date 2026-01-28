import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useFetchData from "../hooks/useFetchData";

const Shorts = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos",
  //     );
  //     const d = await response.json();
  //     setData(d);
  //   };

  //   fetchData();
  // }, []);

  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/todos",
  );

  if (loading) return <h2>Loading ...</h2>;

  if (error) return <h2>Error</h2>;

  return (
    <div>
      Shorts
      <br />
      {/* {!data && <h2>Loading ...</h2>} */}
      {data &&
        data?.map((todo) => {
          return (
            <p>
              <Link to={`/shorts/${todo.id}`}>Todo id: {todo.id}</Link>
            </p>
          );
        })}
    </div>
  );
};

export default Shorts;
