import React from "react";
import style from "./Contact.module.css";
import phoneImg from "../../assets/images/phone.svg";

const Contact = () => {
  return (
    <div id="contact" className={style["contact"]}>
      <div className="container">
        <div className={style["contact_body"]}>
          <div className={style["contact_info"]}>
            <h1>Contact Us</h1>
            <p>
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </p>
            <div className={style["contact_info_phone"]}>
              <img src={phoneImg} alt="" />
              <div className={style["contact_info_texts"]}>
                <p>Call us now</p>
                <h4>(414) 567 - 2109</h4>
              </div>
            </div>
            <hr />
            <h3>Not convinced yet?</h3>
            <p>
              Massa bibendum consectetur maurisid gravida purus, dolor dui amet
              morbi non nunc urna purus diam.
            </p>
            <a className={style["contact_info_link"]} href="#header">
              Browse our packages
            </a>
          </div>
          {/* ////////////////////////////////// inputlar */}
          <form className={style["contact_form"]}>
            <div className={style["input_wrapper"]}>
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" />
            </div>
            <div className={style["input_wrapper"]}>
              <label htmlFor="phoneNumber">Phone number</label>
              <input id="phoneNumber" type="tel" />
            </div>
            <div className={style["input_wrapper"]}>
              <label htmlFor="address">Address</label>
              <input id="address" type="text" />
            </div>
            <div className={style["input_wrapper"]}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" />
            </div>
            <div className={style["input_wrapper"]}>
              <label htmlFor="service">Requested service</label>
              <input id="service" type="text" />
            </div>
            <div className={style["input_wrapper"]}>
              <label htmlFor="day">Day of service</label>
              <input id="day" type="data" />
            </div>
            <div className={style["textarea_wrapper"]}>
              <label htmlFor="">Add a note</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button>Submit message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
