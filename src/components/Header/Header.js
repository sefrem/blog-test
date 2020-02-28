import React from "react";
import Logo from "../icons/Logo";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Logo />
      </div>
    </div>
  );
};

export default React.memo(Header);