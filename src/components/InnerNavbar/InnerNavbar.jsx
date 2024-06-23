import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import style from "./InnerNavbar.module.css";

const InnerNavbar = ({ isOpen, toggleNavbar }) => {
  return (
    <div className={`${style.innerNavbar} ${isOpen ? style.open : ""}`}>
      <button onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faClose} />
      </button>
      <ul>
        <li onClick={toggleNavbar}>
          <a href="#navbar">Home</a>
        </li>
        <li onClick={toggleNavbar}>
          <a href="#about">About</a>
        </li>
        <li onClick={toggleNavbar}>
          <a href="#services">Services</a>
        </li>
        <li onClick={toggleNavbar}>
          <a href="#articles">Articles</a>
        </li>
        <li onClick={toggleNavbar}>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#navbar">Cart (0)</a>
        </li>
      </ul>
      <a className={style["innerNavbar_link"]} href="#navbar">
        Get a free quote
      </a>
    </div>
  );
};

export default InnerNavbar;
