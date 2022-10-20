import { useState, useEffect } from "react";

import HomeCarousel from "../components/Home/HomeCarousel";
import HomeWelcome from "../components/Home/HomeWelcome";
import ProductGrid from "../components/Products/ProductGrid";

const apiUrl = "http://localhost:4000";

const Home = () => {
  const [product, setProduct] = useState([]);
  console.log("Home Product", product);

  useEffect(() => {
    fetch(`${apiUrl}/product`)
      .then((res) => res.json())
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <>
      <HomeCarousel product={product} />
      <HomeWelcome />
      <ProductGrid product={product} />
    </>
  );
};

export default Home;
