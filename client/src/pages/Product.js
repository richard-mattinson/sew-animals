import { useParams } from "react-router-dom";
import useFetch from "../components/Utils/useFetch";

import ProductGrid from "../components/Products/ProductGrid";

const Product = () => {
  const { id } = useParams();
  const { data: productCar } = useFetch("/product");
  const { data: product, loading } = useFetch(`/product/${id}`);
  // TODO: Should I be using state here to store the fetched products?
  // carousel fetch where category = product.category
  console.log("Product Page", product);

  const handleLike = (id) => {
    // POST
    // favourite boolean true
    // where id: id
  };

  return (
    <>
      <div className="container text-center container-details">
        {loading && (
          <div className="loading">
            Just checking the stockroom...
            <i className="bi bi-clipboard-check"></i>
          </div>
        )}
        <div className="row">
          <div className="col sm-5">
            {product.length ? (
              <img
                className="details-img"
                src={product.productImages[0].detailsImage}
                alt={product.alt}
              />
            ) : (
              "FIX ME"
            )}
          </div>
          <div className="col details-description">
            <div className="row">
              <h1 className="details-name">{product.name}</h1>
            </div>
            <div className="row">
              <h3 className="details-category">{product.category}</h3>
            </div>
            <div className="row">{product.description}</div>
          </div>
        </div>
      </div>
      <div className="container">
        You might also like...
      </div>
      <ProductGrid product={productCar} handleLike={handleLike} />
    </>
  );
};

export default Product;
