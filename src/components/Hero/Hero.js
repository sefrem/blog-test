import React from "react";
import Button from "../UI/Button";
import "./hero.css";

const Hero = ({setShowForm}) => {
  return (
    <div className="hero">
      <div className="hero__title">Webinars</div>
      <div className="hero__text">
        Here you can register and take part in educational webinars conducted by
        the best digital marketing experts.
      </div>
      <Button
        classmodificator="btn_add"
        onClick={() => setShowForm(true)}
        text="Add new"
      />
    </div>
  );
};

export default React.memo(Hero);
