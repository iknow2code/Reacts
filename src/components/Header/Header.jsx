import React from "react";
import "./header.scss";
import Logo1 from "../../assets/images/logo.png";
import Logo2 from "../../assets/images/nepal.gif";
const Header = () => {
  return (
  
    <header>
      <p> Government of Nepal </p>
      <img src={Logo1} className="logo-img" alt="logo"  align="left"/>
      <img src={Logo2} className="logo-img" alt="logo"  align="right"/>
      <p><b> Ministry of Physical Infrastructure and Transport </b></p>
      <p> Department of Transportation Management </p>
      <h1>Traffic Police Fine Payment </h1>  
    </header>
  );
};

export default Header;

