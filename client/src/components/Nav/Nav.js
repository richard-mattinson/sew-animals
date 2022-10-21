import { Link } from "react-router-dom";
const Logo = "https://drive.google.com/uc?id=1k0BUFLlnXwZ5bhzHhW19uFC0k_722KoK";

const Nav = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-white mt-5 mb-0 p-0">
      <div className="container-fluid">
        <Link className="nav-title list-inline-item mx-3" to="/">
          <img src={Logo} width="200" alt="SEW ANIMALS logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 search-bar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <span className="container-fluid"></span>

          <span>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/account"
                >
                  <Link to="/login">
                  <button
                    class="btn btn-lg btn-outline-secondary"
                    type="button"
                  >
                    Login
                  </button>
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  <button class="btn btn-lg btn-success me-2" type="button">
                    Join
                  </button>
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
