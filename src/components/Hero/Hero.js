import React from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/Button/Button";
import { toggleModalForm } from "../../redux/modalFrom/modalFrom.actions";
import "./hero.css";

const Hero = () => {
  const dispatch = useDispatch();
 
  return (
    <>
      <div className="hero">
        <div className="hero__title">Webinars</div>
        <div className="hero__text">
          Here you can register and take part in educational webinars conducted
          by the best digital marketing experts.
        </div>
        <Button
          trait="primary"
          onClick={() => dispatch(toggleModalForm())}
          text="Add new"
        />
      </div>
      <div id="anchor" />
    </>
  );
};

export default React.memo(Hero);
