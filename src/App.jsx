import React from "react";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Products from "./pages/Product";
import Support from "./pages/Support";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
