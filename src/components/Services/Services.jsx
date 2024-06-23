import React from "react";
import Btnlg from "../Btns/BtnLg";
import style from "./Services.module.css";
import BtnOutline from "../Btns/BtnOutline";
import Services_card1Img from "../../assets/images/services_card1.png";
import Services_card2Img from "../../assets/images/services_card2.png";
import Services_card3Img from "../../assets/images/services_card3.png";
import phoneImg from "../../assets/images/phone.svg";

const Services = () => {
  return (
    <div className="container">
      <div id="services" className={style["services"]}>
        <div className={style["services_head"]}>
          <h1>Our Services</h1>
          <BtnOutline />
        </div>
        <div className={style["services_cards"]}>
          <div className={style["services_card"]}>
            <img src={Services_card1Img} alt="" />
            <h3>House cleaning</h3>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className={style["services_card"]}>
            <img src={Services_card2Img} alt="" />
            <h3>Office cleaning</h3>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className={style["services_card"]}>
            <img src={Services_card3Img} alt="" />
            <h3>Industrial cleaning</h3>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
        {/* ////////////////////////// covid ichi */}
        <div className={style["services_foot"]}>
          <div className={style["services_foot_info"]}>
            <h4>Covid-19 sanitization</h4>
            <h1>
              We follow guidelines to keep you safe from the COVID-19 virus
            </h1>
            <p className={style["services_foot_info_text"]}>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
            <div className={style["services_contact"]}>
              <Btnlg />
              <div className={style["services_number_wrapper"]}>
                <img src={phoneImg} alt="" />
                <div className={style["services_text_wrapper"]}>
                  <p className={style["services_number_text"]}>Call us now</p>
                  <h2 className={style["services_number"]}>(414) 567 - 2109</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
