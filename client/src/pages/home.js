import pencilGuineaPigL from "../assets/pencilGuineaPigL.jpg";
// import Owner from "../assets/owner169.png";
// import Dishes from "../assets/dishes169.png";

const Home = () => {
  return (
    <>
      {/* <div className="container-fluid opacity-50 p-0 m-0">
        <img
          className="img-fluid w-100"
          src={pencilGuineaPigL}
          alt="A Pencil Case with images of Guinea Pigs wearing medical attire"
        />
      </div> */}
      {/* FIC THE CAROUSEL */}
      {/* <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pencilGuineaPigL} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pencilGuineaPigL} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pencilGuineaPigL} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div> */}
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={pencilGuineaPigL} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Guinea Pig Pencil Case</h5>
              <p>
                Store all your favourite stationary, while the pigs keep them
                safe!
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={pencilGuineaPigL} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={pencilGuineaPigL} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="contact card justify-self-center col-sm-6 my-5 w-100">
        <div className="row d-flex justify-content-center"></div>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-4">
            <i className="bi bi-geo-alt"></i>
            110 Magdalen Rd, Oxford, OX4 1RQ
          </div>
          <div className="col-sm-3">
            <i className="bi bi-clock"></i>10am~4:30pm, Daily
          </div>
          <div className="col-sm-2">
            <i className="bi bi-telephone"></i>01865 420515
          </div>
        </div>
      </div>

      <div className="container m-100">
        <p>
          <i className="bi bi-heart"></i>
          <i className="bi bi-bag-heart"></i>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          sapiente tempora ab cum quasi nam velit, porro illum maiores vitae
          ratione ea molestias quidem aspernatur obcaecati esse omnis! Fuga,
          suscipit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          sapiente tempora ab cum quasi nam velit, porro illum maiores vitae
          ratione ea molestias quidem aspernatur obcaecati esse omnis! Fuga,
          suscipit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          sapiente tempora ab cum quasi nam velit, porro illum maiores vitae
          ratione ea molestias quidem aspernatur obcaecati esse omnis! Fuga,
          suscipit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          sapiente tempora ab cum quasi nam velit, porro illum maiores vitae
          ratione ea molestias quidem aspernatur obcaecati esse omnis! Fuga,
          suscipit!
        </p>
      </div>
    </>
  );
};

export default Home;
