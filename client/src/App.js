import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Nav from "./components/Nav/Nav";

import "./App.css";

function App() {
  const [accountPage, isAccountPage] = useState(false)

  return (
    <div className="App">
      {/* TODO: could Nav be wrapped in an if statement, only rendering if the page ISN'T login / register? */}
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
