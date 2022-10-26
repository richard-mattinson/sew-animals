import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../components/Utils/useFetch";

import SimilarGrid from "../components/Products/SimilarGrid";

import placeholderImage from "../assets/brokenImage.jpg"

const apiUrl = "http://localhost:4000";


const Product = () => {
  const { id } = useParams();
    // const [similarGrid, setSimilarData] = useState([]);
  const { data: product, loading } = useFetch(`/product/${id}`);
  const { data: similarGrid } = useFetch(`/product?category=${product.category}`);
  // const similar = similarGrid.filter(similarGrid.category === product.category)
  // TODO: Should I be using state here to store the fetched products?
  // carousel fetch where category = product.category
  // console.log("Product Page", product);
  // console.log("Similar Grid", similarGrid);

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
          <div className="col image-holder">
            <img
              className="details-img"
              src={product.detailsImg}
              alt={product.alt}
            />
            {/* {product.length ? (
            ) : (
              <img
                className="details-img"
                src={placeholderImage}
                alt={"Placeholder"}
              />
            )} */}
          </div>
          <div className="col details-description">
            <div className="row">
              <h1 className="details-name">{product.name}</h1>
            </div>
            <div className="row">
              <h3 className="details-category">{product.category}</h3>
            </div>
            <div className="row">
              {/* <h3 className="details-category">{product.productTags[0].tag}</h3> */}
            </div>
            <div className="row">{product.description}</div>
          </div>
        </div>
      </div>
      <div className="container">You might also like...</div>
      <SimilarGrid product={similarGrid} />
    </>
  );
};

export default Product;
