import React, { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const d = await response.json();
        setData(d);
      } catch (error) {
        setError("There is something error");
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchData;
