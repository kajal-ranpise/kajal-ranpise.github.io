import React from "react";
import heroBg from "../assets/img/hero-bg.jpg";
import { Link } from "react-router-dom";


function Hero() {
  return (
    <section id="hero" className="hero section">
      <img src={heroBg} alt="Hero Background" data-aos="fade-in" />

      <div
        className="container text-center"
        data-aos="zoom-out"
        data-aos-delay="100"
      >
        <div className="row">
          {/* <div className="row justify-content-center"> */}
          <div className="col-lg-8">
            <h2>Kajal Ranpise</h2>
            <p>
              Full Stack Developer | MERN Stack | AI Enthusiast | Building
              Scalable Web & AI Solutions
            </p>
            <Link to="/about" className="btn-get-started">
              About Me
            </Link>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
