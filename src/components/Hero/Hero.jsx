import React from "react";
import style from "./Hero.module.css";
import BtnLg from "../Btns/BtnLg";
import PhoneImg from "../../assets/images/phone.svg";

const Hero = () => {
  return (
    <div className={style["hero"]}>
      <h1>Quality cleaning for your home</h1>
      <p className={style["hero_text"]}>
        Condimentum mauris sit cursus amet id non neque pharetra nulla ornare
        sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et
        nulla magna lacus penatibus.
      </p>
      <div className={style["hero_contact"]}>
        <BtnLg />
        <div className={style["hero_call"]}>
          <img src={PhoneImg} alt="" />
          <div className={style["hero_call_content"]}>
            <p>Call us now</p>
            <h3>(414) 567 - 2109</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
