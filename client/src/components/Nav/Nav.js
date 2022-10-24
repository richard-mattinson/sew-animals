import { Link, renderMatches } from "react-router-dom";
import { useState } from "react";
const Logo = "https://drive.google.com/uc?id=1k0BUFLlnXwZ5bhzHhW19uFC0k_722KoK";
const profilePic =
"https://drive.google.com/uc?id=1PGUdjGkmhaGXWHHW96iJDF8d_JELJBGM";

const Nav = () => {
  const localToken = localStorage.getItem("token")
  const handleLogOut = () => {
    localStorage.removeItem("token")
  }

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
                {localToken ? (
                  <Link to="/">
                    <button
                      onClick={() => handleLogOut()}
                      className="btn btn-lg btn-outline-secondary"
                      type="button"
                    >
                      Logout
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button
                      className="btn btn-lg btn-outline-secondary"
                      type="button"
                    >
                      Login
                    </button>
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {localToken ? (
                  <img src={profilePic} className="profile-picture" width="50" alt="SEW ANIMALS logo" />
                ) : (
                  <Link to="/register">
                    <button
                      className="btn btn-lg btn-primary me-2"
                      type="button"
                    >
                      Join
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
