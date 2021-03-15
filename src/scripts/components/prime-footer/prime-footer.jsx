import React from "react";
import {handleBlankLinkClick} from "../../utils";

const LINKS = [
  `Корпоративным клиентам`,
  `Клиентам`,
  `Аренда авто`,
  `Каршеринг`,
  `Как продать авто`,
  `Traid-in`,
  `Test draiv`
];

const PrimeFooter = () => {
  return (
    <footer className="prime-footer">
      <nav className="prime-footer__nav">
        <ul className="prime-footer__nav-links-list">
          {
            LINKS.map((link, index) => (
              <li key={index} className="prime-footer__nav-link-wrapper">
                <a
                  className="prime-footer__nav-link"
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
    </footer>
  );
};

PrimeFooter.propTypes = {};

export default PrimeFooter;
