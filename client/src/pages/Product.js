import { useEffect, useState } from "react";

const apiUrl = "http://localhost:4000";

const Product = () => {
    const [product, setProduct] = useState([])
    console.log("Product Page", product);

    useEffect(() => {
        fetch(`${apiUrl}/product/:id`)
            .then((res) => res.json())
            .then((res) => setProduct(res.data));
    }, [])
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col">{product.name}</div>
          <div class="col">2 of 2</div>
        </div>
        <div class="row">
          <div class="col">1 of 3</div>
          <div class="col">2 of 3</div>
          <div class="col">3 of 3</div>
        </div>
      </div>
    </>
  );
};

export default Product;
