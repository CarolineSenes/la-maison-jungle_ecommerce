import React from "react";
import "../styles/Banner.css";
import logo from "../assets/logo.png";

const Banner = () => {
  const title = "la maison jungle";
  return (
    <div className="lmj-banner">
      <img className="lmj-logo" src={logo} alt="logo"/>
      <h1 className="lmj-title">{title.toUpperCase()}</h1>
    </div>
  );
};

export default Banner;
