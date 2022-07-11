import React from "react";
// import imgTestimonail '../images/imgTestimonail.jpg';
import "./App.css";
import "./dist/main.css";
// import './scss/custom.css'
import Testimonials from "./components/Testimonials";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="page">
      <NavBar></NavBar>
      <div className="container align-items-center justify-content-center height App">
        <div className="principalContainer">
          <Introduction></Introduction>
          <Testimonials />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
