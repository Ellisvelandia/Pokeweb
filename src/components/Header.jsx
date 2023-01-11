import React from "react";
import logo from "../assets/logo.png";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <header className="h-36 flex md:justify-center justify-start relative">
      <SocialMedia />
      <img
        src={logo}
        alt="logo"
        className="absolute inset-0 m-auto md:h-36 h-28 md:my-0 my-12"
      />
    </header>
  );
};

export default Header;
