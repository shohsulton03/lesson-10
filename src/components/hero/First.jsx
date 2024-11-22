import React from "react";
import "./First.scss";
import first from "../../assets/first_1.png";
import second from "../../assets/first_2.png";
import third from "../../assets/first_3.png";

function First() {
  return (
    <section className="first">
      <div className="first__box">
        <div className="first__content">
          <p className="first__content-txt">
            <span>01</span> Best Coffee Flavour
          </p>
          <img src={first} alt="" />
        </div>
        <div className="first__content">
          <p className="first__content-txt">
            <span>02</span> Place to get lost
          </p>
          <img src={second} alt="" />
        </div>
        <div className="first__content">
          <p className="first__content-txt">
            <span>03</span> Proper roesting
          </p>
          <img src={third} alt="" />
        </div>
      </div>
    </section>
  );
}

export default First;
