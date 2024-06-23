import React from "react";
import style from "./Articles.module.css";
import BtnLg from "../Btns/BtnLg";
import card1_img from "../../assets/images/articles_img1.png";
import card2_img from "../../assets/images/articles_img2.png";

const Articles = () => {
  return (
    <div className="container">
      <div id="articles" className={style["articles"]}>
        <hr />
        <div className={style["articles_head"]}>
          <h1>Articles & resources</h1>
          <div className={style["articles_head_btns"]}>
            <BtnLg />
            <a href="#header">Browse articles</a>
          </div>
        </div>
        <div className={style["articles_cards"]}>
          <div className={style["articles_card"]}>
            <img src={card1_img} alt="" />
            <div className={style["articles_card_body"]}>
              <h4>
                8 best vacuum cleaners to clean any mess for your home in 2022
              </h4>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className={style["articles_card_foot"]}>
                <h5>Jan 28, 2022</h5>
                <div className={style["articles_card_square"]}></div>
              </div>
            </div>
          </div>
          <div className={style["articles_card"]}>
            <img src={card2_img} alt="" />
            <div className={style["articles_card_body"]}>
              <h4>
                How to properly disinfect your phone and other electronics
              </h4>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className={style["articles_card_foot"]}>
                <h5>Feb 1, 2022</h5>
                <div className={style["articles_card_square"]}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
