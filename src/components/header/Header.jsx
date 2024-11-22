import React from "react";
import "./Header.scss";
import logo from "../../assets/Logo (1).svg";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="container__lg">
          <div className="navbar__container">
            <ul className="navbar__collection">
              <li className="navbar__collection-txt">Home</li>
              <li className="navbar__collection-txt">About</li>
              <li className="navbar__collection-txt">Menu</li>
              <li className="navbar__collection-txt">Reservation</li>
            </ul>
            <div className="navbar__img">
              <img src={logo} alt="" />
            </div>
            <div className="navbar__right">
              <ul className="navbar__collection">
                <li className="navbar__collection-txt">Pages</li>
                <li className="navbar__collection-txt">Shop</li>
                <li className="navbar__collection-txt">Contract</li>
              </ul>
              <div className="navbar__icons">
                <FiSearch className="navbar__icon" />
                <FiShoppingBag className="navbar__icon" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="header__box">
        <div className="container">
          <div className="header__box-block">
            <h1 className="header__box-title">Enjoy Your Morning Coffee.</h1>
            <p className="header__box-txt">
              The coofee is brewed by fist roasting the green coffee beans over
              hot coals in brazier. given to Opportunity
            </p>
            <button className="header__box-btn">Test Coffee</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
