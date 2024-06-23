import React from "react";
import style from "./Footer.module.css";
import footerLogo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className={style["footer"]}>
        <div className={style["footer_head"]}>
          <div className={style["footer_info"]}>
            <h1>Quality cleaning for your home</h1>
            <p>
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
            <div className={style["footer_info_icons"]}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={style["footer_contact"]}>
            <h3>Contact us</h3>
            <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
            <p>(414) 567 - 2109</p>
            <p>contact@cleaning.com</p>
          </div>
          <div className={style["footer_working_hours"]}>
            <h3>Hours</h3>
            <h4>Monday to Friday</h4>
            <p>6:00 AM - 9:00 PM</p>
            <h4>Saturday & Sunday</h4>
            <p>8:00 AM - 8:00 PM</p>
          </div>
          <div className={style["footer_links"]}>
            <h3>Get a free estimate</h3>
            <h2>(414) 567 - 2109</h2>
            <p>
              Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <a href="#header">Request a free quote</a>
          </div>
        </div>
        <hr />
        <div className={style["footer_foot"]}>
          <a className={style["footer_logo"]} href="#header">
            <img src={footerLogo} alt="Footer Logo_Image" />
          </a>
          <p>
            Copyright © Cleaning X | Designed by{" "}
            <a href="#header">BRIX Templates</a> - Powered by{" "}
            <a href="https://t.me/qosimjon_1">Qosimjon</a> Licenses
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
