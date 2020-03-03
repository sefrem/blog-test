import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="/src/assets/icons/logo.svg" alt="logo" />
      </div>
    </div>
  );
};

export default React.memo(Header);
