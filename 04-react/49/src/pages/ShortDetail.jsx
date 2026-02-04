import { ALargeSmall, Camera } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetchData from "../hooks/useFetchData";

const ShortDetail = () => {
  const { id } = useParams();

  //   const [data, setData] = useState(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/todos/" + id,
  //       );
  //       const d = await response.json();
  //       setData(d);
  //     };

  //     fetchData();
  //   }, []);

  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/todos/" + id,
  );

  if (loading) return <h2>Loading the todo for {id} ...</h2>;

  if (error) return <h2>Error</h2>;

  return (
    <div>
      <br />
      Title: {data.title}
      <br />
      Complete: {data.completed.toString()}
    </div>
  );
};

export default ShortDetail;
