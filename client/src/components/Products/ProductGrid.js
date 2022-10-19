// import { useState } from "react";

const ProductGrid = ({product}) => {
  // const [product, setProduct] = useState([
  //   { name: "Guinea Pig Pencil Case", category: "Pencil Cases", id: 1 },
  //   { name: "Penguin Face Mask", category: "Face Masks", id: 2 },
  //   { name: "Duckling Coin Purse", category: "Coin Purses", id: 3 },
  // ]);
  return (
  <>
    <div className="container m-100">
      {product.map((product) => (
        <div className="product-card" key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  </>
  );
};

export default ProductGrid;
