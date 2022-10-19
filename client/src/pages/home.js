import { useState } from "react";

import HomeCarousel from "../components/Home/HomeCarousel";
import HomeWelcome from "../components/Home/HomeWelcome";
import ProductGrid from "../components/Products/ProductGrid";

const Home = () => {
    const [product, setProduct] = useState([
      {
        name: "Guinea Pig Pencil Case",
        image:
          "https://drive.google.com/uc?id=1de-jH59X4vNkiySh_2CkFAXqvjhw93gs",
        category: "Pencil Cases",
        id: 1,
      },
      {
        name: "Penguin Face Mask",
        image:
          "https://drive.google.com/uc?id=1a9aPixoUXVaAO50XhDinQ4Pp8F0kfj08",
        category: "Face Masks",
        id: 2,
      },
      {
        name: "Duckling Coin Purse",
        image:
          "https://drive.google.com/uc?id=1jb5b3bmN3NEj-m8QoQy1z-N11lGfN_Aj",
        category: "Coin Purses",
        id: 3,
      },
    ]);
  return (
    <>
      <HomeCarousel />
      <HomeWelcome />
      <ProductGrid product={product}/>
    </>
  );
};

export default Home;
