import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Component/Pages/About/About";
import Contact from "./Component/Pages/Contact/Contact";
import Home from "./Component/Pages/Home/Home";
import Login from "./Component/Pages/Login/Login";
import Services from "./Component/Pages/Services/Services";
import SignUP from "./Component/Pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        theme="colored"
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUP />} />
        </Routes>
      </Router>
      ,
    </>
  );
};
export default App;
