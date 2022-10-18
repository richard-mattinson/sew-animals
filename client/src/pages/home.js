import bagGuineaPig from "../assets/bagGuineaPig.jpg";
// import Owner from "../assets/owner169.png";
// import Dishes from "../assets/dishes169.png";

const Home = () => {
  return (
    <>
      <div className="container-fluid opacity-50 p-0 m-0">
        <img
          className="img-fluid w-100"
          src={bagGuineaPig}
          alt="A Tote Bag with images of Guinea Pigs"
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
