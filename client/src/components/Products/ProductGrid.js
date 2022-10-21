const ProductGrid = ({ product, handleLike }) => {
  return (
    <>
      <div className="container product-card">
        {product.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.productImages[0].thumbImage}
              className="card-img-top"
              alt={product.alt}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {product.category}
              </h6>
              <p className="card-text">{product.description}</p>
              <button type="button" class="btn btn-outline-danger">
                <i
                  class="bi bi-heart"
                  onClick={() => handleLike(product.id)}
                ></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
