import React from "react";
import {handleBlankLinkClick} from "../../utils";

import logo from "../../../images/logo.svg";

const LINKS = [
  `Автомобили`,
  `Контакты`,
  `Услуги`,
  `Вакансии`
];

const PrimeHeader = () => {
  return (
    <header className="prime-header">
      <div className="prime-header__content">
        <img
          className="prime-header__logo"
          src={logo}
          width="134"
          height="55"
          alt="AVTO MOTO."
        />
        <nav className="prime-header__nav">
          <ul className="prime-header__nav-links-list">
            {
              LINKS.map((link, index) => (
                <li key={index} className="prime-header__nav-link-wrapper">
                  <a
                    className="prime-header__nav-link"
                    href="#blank"
                    onClick={handleBlankLinkClick}
                  >
                    {link}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

PrimeHeader.propTypes = {};

export default PrimeHeader;
