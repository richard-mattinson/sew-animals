import { useState, useEffect } from "react";

import HomeCarousel from "../components/Home/HomeCarousel";
import HomeWelcome from "../components/Home/HomeWelcome";
import ProductGrid from "../components/Products/ProductGrid";
import useFetch from "../components/Utils/useFetch";

const Home = () => {
  // TODO: Should I be using state here to store the fetched products? 
  const { data: product, loading } = useFetch("/product")
  
  console.log("Home Page", product);

  const handleLike = (id) => {
    // POST 
    // favourite boolean true 
    // where id: id 
  }

  return (
    <>
      {/* the line below tells HomeCarousel to wait for the data in product before rendering  */}
      {product && 
      <HomeCarousel product={product} />}
      <HomeWelcome />
      {loading && (
        <div className="loading">
          Just checking the stockroom... <i class="bi bi-clipboard-check"></i>
        </div>
      )}
      <ProductGrid product={product} handleLike={handleLike} />
    </>
  );
};

export default Home;
