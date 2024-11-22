import React from "react";
import "./Second.scss";
import photo from "../../assets/cofee_type.png";
import star from "../../assets/stars.svg";
import { FiShoppingBag } from "react-icons/fi";

function Second() {
  return (
    <section className="second">
      <div className="second__box">
        <p className="second__box-txt">Popular Product</p>
        <p className="second__box-title">Coffee popular Product</p>
        <div className="second__box-products">
          <div className="second__box-product">
            <img className="second__box-product-img" src={photo} alt="" />
            <img className="second__box-product-image" src={star} alt="" />
            <p className="second__box-product-title">brazil coffee gred</p>
            <p className="second__box-product-price">
              Price - <span>$320.00/</span> <span>$358</span>
            </p>
            <button className="second__box-product-btn">
              <FiShoppingBag className="second__box-product-icon" />
              Add to cart
            </button>
          </div>
          <div className="second__box-product">
            <img className="second__box-product-img" src={photo} alt="" />
            <img className="second__box-product-image" src={star} alt="" />
            <p className="second__box-product-title">brazil coffee gred</p>
            <p className="second__box-product-price">
              Price - <span>$320.00/</span> <span>$358</span>
            </p>
            <button className="second__box-product-btn">
              <FiShoppingBag className="second__box-product-icon" />
              Add to cart
            </button>
          </div>
          <div className="second__box-product">
            <img className="second__box-product-img" src={photo} alt="" />
            <img className="second__box-product-image" src={star} alt="" />
            <p className="second__box-product-title">brazil coffee gred</p>
            <p className="second__box-product-price">
              Price - <span>$320.00/</span> <span>$358</span>
            </p>
            <button className="second__box-product-btn">
              <FiShoppingBag className="second__box-product-icon" />
              Add to cart
            </button>
          </div>
        </div>
        <button className="second__box-btn">View all product</button>
      </div>
    </section>
  );
}

export default Second;
