import pencilGuineaPigL from "../assets/pencilGuineaPigL.jpg";
import maskPenguinL from "../assets/maskPenguinL.jpg"
import coinDuckL from "../assets/coinDuckL.jpg"

const Home = () => {
  return (
    <>
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
            <img src={pencilGuineaPigL} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Guinea Pig Pencil Case</h5>
              <p>
                Store all your favorite stationary, while the pigs keep them
                safe!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={maskPenguinL} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Penguin Face Mask</h5>
              <p>
                This jolly penguin will keep your face covered from The North
                Pole to the South!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={coinDuckL} className="d-block w-100" alt="..." />
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
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="contact card justify-self-center col-sm-6 my-5 w-100">
        <div className="row d-flex justify-content-center"></div>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-4">
            <i className="bi bi-geo-alt p-2"></i>
            Oxford, England
          </div>
          <div className="col-sm-3">
            <i class="bi bi-truck p-2"></i>5~10 working days
          </div>
          <div className="col-sm-2">
            <i class="bi bi-envelope p-2"></i>Contact Us
          </div>
        </div>
      </div>

      <div className="container m-100">
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
