import React from "react";
import style from "./Navbar.module.css";
import Logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import BtnSm from "../Btns/BtnSm";

const Navbar = ({ isOpen, toggleNavbar }) => {
  return (
    <div id="navbar" className={style["navbar"]}>
      <ul>
        <a className={style["logo"]} href="##">
          <img src={Logo} alt="" />
        </a>
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#articles">Articles</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={style["navbar_links"]}>
        <a className={style["navbar_cart_link"]} href="#header">
          Cart (0)
        </a>
        <BtnSm />
      </div>
      <button onClick={toggleNavbar} className={style["open_btn"]}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default Navbar;
