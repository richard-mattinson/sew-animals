import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Product from "./pages/Product";

import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      {/* TODO: could Nav be wrapped in an if statement, only rendering if the page ISN'T login / register? */}
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
