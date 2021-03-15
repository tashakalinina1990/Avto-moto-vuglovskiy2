import React from "react";
import Slider from "../slider/slider";
import Info from "../info/info";
import {handleBlankLinkClick} from "../../utils";

const PROPERTIES = [
  {
    title: `бензин`,
    modifier: `gas`,
  },
  {
    title: `механика`,
    modifier: `mechanical`,
  },
  {
    title: `100 л.с.`,
    modifier: `horse`,
  },
  {
    title: `1.4 л`,
    modifier: `engine`,
  }
];

const Main = () => {
  return (
    <main className="prime-main">
      <div className="prime-main__banner">
        <div className="prime-main__right-column">
          <h1 className="prime-main__title">Марпех 11</h1>
          <ul className="prime-main__properties-list">
            {
              PROPERTIES.map((property, index) => (
                <li
                  key={index}
                  className={
                    `prime-main__property
                    prime-main__property--${property.modifier}`
                  }
                >
                  {property.title}
                </li>
              ))
            }
          </ul>
          <p className="prime-main__price">2 300 000 ₽</p>
          <p className="prime-main__price prime-main__price--old">2 400 000 ₽</p>
          <a
            className="prime-main__purchase"
            href="#blank"
            onClick={handleBlankLinkClick}
          >
            Оставить заявку
          </a>
          <a
            className="prime-main__credit"
            href="#blank"
            onClick={handleBlankLinkClick}
          >
            В кредит от 11 000 ₽
          </a>
        </div>
        <div className="prime-main__left-column">
          <Slider />
        </div>
      </div>
      <Info />
    </main>
  );
};

Main.propTypes = {};

export default Main;
