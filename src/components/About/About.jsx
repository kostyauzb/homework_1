import React from "react";
import BtnLg from "../Btns/BtnLg";
import style from "./About.module.css";
import card1Img from "../../assets/images/card1.png";
import card2Img from "../../assets/images/card2.png";
import card3Img from "../../assets/images/card3.png";
import BtnOutline from "../Btns/BtnOutline";

const About = () => {
  return (
    <div className="container">
      <div id="about" className={style["about"]}>
        <h1>About Us</h1>
        <p className={style["about_text"]}>
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
          nisi felis non ultrices massa id egestas quam velit pretium nu.
        </p>
        <div className={style["about_cards"]}>
          <div className={style["about_card"]}>
            <img src={card1Img} alt="" />
            <h2>1. Schedule online</h2>
            <p>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </div>
          <div className={style["about_card"]}>
            <img src={card2Img} alt="" />
            <h2>2. Pay online easily</h2>
            <p>
              Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
              at nunc.
            </p>
          </div>
          <div className={style["about_card"]}>
            <img src={card3Img} alt="" />
            <h2>3. Get your house cleaned</h2>
            <p>
              Nunc maecenas sollicitudin metus tellus mattis sed porttitor
              cursus eleifend.
            </p>
          </div>
        </div>
        <div className={style["about_links"]}>
          <BtnLg />
          <BtnOutline />
        </div>
      </div>
    </div>
  );
};

export default About;
