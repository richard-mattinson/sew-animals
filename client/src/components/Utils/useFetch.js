import { useState, useEffect } from "react";
const apiUrl = "http://localhost:4000";

// data can be whatever you want to pass in, in this case product
const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log("Home Product", data);

  // uncomment setTimeout to simulate a slow server load and see the loading message
  useEffect(() => {
    // setTimeout(() => {
      fetch(`${apiUrl}${endPoint}`)
        .then((res) => res.json())
        .then((res) => setData(res.data));
      setLoading(false);
    // }, 1000);
  }, [endPoint]);
  return { data, loading}
}

export default useFetch