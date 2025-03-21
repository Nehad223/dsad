import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Catg = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    axios
      .get(`https://market-cwgu.onrender.com/category/${params.catgId}/`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params.catgId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <ul>
        {data.items &&
          data.items.map((item, itemIndex) => (
            <li key={itemIndex}>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Catg;
