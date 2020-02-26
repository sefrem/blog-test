import React from "react";
import "./hero.css"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__title">Webinars</div>
      <div className="hero__text">
        Here you can register and take part in educational webinars conducted by
        the best digital marketing experts.
      </div>
      <button className="add">Add new</button>
    </div>
  );
};

export default Hero;
