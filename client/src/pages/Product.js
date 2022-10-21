import { useParams } from "react-router-dom";
import useFetch from "../components/Utils/useFetch";

const Product = () => {
  const { id } = useParams()
  const {data: product, loading } = useFetch(`/product/${id}`)
  return (
    <>
      <div class="container text-center">
        {loading && (
          <div className="loading">
            Just checking the stockroom... <i class="bi bi-clipboard-check"></i>
          </div>
        )}
        <div class="row">
          <div class="col">Blog id {id}</div>
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
