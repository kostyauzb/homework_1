import React, { useState, useEffect } from "react";
import style from "./Back_top.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const Back_top = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      className={`${style.back_top} ${isVisible ? style.visible : ""}`}
      onClick={scrollToTop}
      href="#navbar"
    >
      <FontAwesomeIcon icon={faAnglesUp} />
    </a>
  );
};

export default Back_top;
