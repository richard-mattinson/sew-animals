import { useState, useEffect } from "react";

import HomeCarousel from "../components/Home/HomeCarousel";
import HomeWelcome from "../components/Home/HomeWelcome";
import ProductGrid from "../components/Products/ProductGrid";

const apiUrl = "http://localhost:4000";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading ] = useState(true)
  console.log("Home Product", product);

  const handleLike = (id) => {
    // POST 
    // favourite boolean true 
    // where id: id 
  }

  // simulating a slow server load to see the loading message
  useEffect(() => {
    setTimeout(() => {      
      fetch(`${apiUrl}/product`)
        .then((res) => res.json())
        .then((res) => 
        setProduct(res.data))
        setLoading(false);
    }, 1000);
  }, []);
  
  return (
    <>
    {/* the line below tells HomeCarousel to wait for the data in product before rendering  */}
      { product && <HomeCarousel product={product} />}
      <HomeWelcome />
      {loading && <div >Just checking the stockroom...</div>}
      <ProductGrid product={product} handleLike={handleLike} />
    </>
  );
};

export default Home;
