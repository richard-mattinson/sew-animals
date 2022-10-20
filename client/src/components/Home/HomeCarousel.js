const HomeCarousel = ({ product }) => {
  console.log("Carousel", product);
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://drive.google.com/uc?id=1HPyHQej4JuEndspEGZMPHcjj4HJ13qy6"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Guinea Pig Pencil Case</h5>
            <p>
              Store all your favorite stationary, while the pigs keep them safe!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://drive.google.com/uc?id=1dLHlYWlWq5HGuHoekpfGOcmztaeSXM87"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Penguin Face Mask</h5>
            <p>
              This jolly penguin will keep your face covered from The North Pole
              to the South!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://drive.google.com/uc?id=1BXmut2QMWPC5Gy9Z7hxcrP6xss6PGhn_"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Duckling Coin Purse</h5>
            <p>
              Why should piggy have all the fun? Duckling likes to keep your
              money safe too!
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeCarousel;
