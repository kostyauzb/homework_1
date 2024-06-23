import React, { useState } from "react";
import style from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
// import InnerNavbar from "../InnerNavbar/InnerNavbar";
import BackTop from "../Back-top/BackTop";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div id="header" className={style.header}>
      <div className="container">
        <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
        {/* <InnerNavbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} /> */}
        <Hero />
        <BackTop />
      </div>
    </div>
  );
};

export default Header;
