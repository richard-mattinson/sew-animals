import { useState, useEffect } from "react";
const apiUrl = "http://localhost:4000";

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("Home Product", data);

  // simulating a slow server load to see the loading message
  useEffect(() => {
    setTimeout(() => {
      fetch(`${apiUrl}${endPoint}`)
        .then((res) => res.json())
        .then((res) => setData(res.data));
      setLoading(false);
    }, 2000);
  }, [endPoint]);
  return { data, loading}
}

export default useFetch