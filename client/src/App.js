import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Logo from "./assets/sewLogoBig.jpg"

function App() {
  return (
    <div className="App">

      <nav className="navbar sticky-top navbar-expand-lg bg-white mt-5 mb-0 p-0">
        <div className="container-fluid">
          <Link className="nav-title list-inline-item mx-3" to="/">
            <img src={Logo} width="200" alt="SEW ANIMALS" />
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
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <span className="container-fluid"></span>
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sign up
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul> */}
            
            <span>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <button
                      class="btn btn-lg btn-outline-secondary"
                      type="button"
                    >
                      Login
                    </button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
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

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product" element={<Menu />} />
        <Route path="/register" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
