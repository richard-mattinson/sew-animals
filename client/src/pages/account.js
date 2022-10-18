import bagGuineaPig from "../assets/bag-guineaPig.jpg";
// import Owner from "../assets/owner169.png";
// import Dishes from "../assets/dishes169.png";

const Account = () => {
  return (
    <>
      <div className="container-fluid opacity-50 p-0 m-0">
        <img
          className="img-fluid w-100"
          src={bagGuineaPig}
          alt="Facer of the Magic Cafe "
        />
      </div>
      {/* FIC THE CAROUSEL */}
      {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Facer} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Dishes} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Owner} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div> */}

      <div className="contact card col-sm-6 my-5 w-100">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bag-heart"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
            />
          </svg>
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

export default Account;
