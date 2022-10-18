import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <nav className="nav-ul container-fluid sticky-top bg-white mt-5 mb-0 p-0">
        <Link className="nav-li list-inline-item mx-3" to="/">
          SEW ANIMALS
        </Link>
        {/* <Link className="nav-li list-inline-item mx-3" to="/menu">
          Menu
        </Link>
        <Link className="nav-li list-inline-item mx-3" to="/about">
          About
        </Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
