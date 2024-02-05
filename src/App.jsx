import React from "react";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Product from "./pages/Product";
import Support from "./pages/Support";
import Footer from "./components/Footer";
import ThemeProvider from "./context/ThemeProvider";
import Pricing from "./pages/Pricing";
import TopFooter from "./components/TopFooter";

const App = () => {
  return (
    <>
      <Router>
        <ThemeProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/support" element={<Support />} />
          </Routes>
          <TopFooter />
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
