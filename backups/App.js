import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav.js"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product" element={<Menu />} />
        <Route path="/register" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
