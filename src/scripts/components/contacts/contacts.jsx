import React from "react";
import Map from "../map/map";

const Contacts = () => {
  return (
    <section className="contacts">
      <h3 className="contacts__title visually-hidden">Контакты</h3>
      <div className="contacts__info-wrapper">
        <p className="contacts__address-title">Адрес</p>
        <p className="contacts__address">
          Санкт-Петербург, <br/> набережная реки Карповки, дом 5
        </p>
        <p className="contacts__time-title">Режим работы</p>
        <p className="contacts__time">Ежедневно, с 10:00 до 21:00</p>
        <p className="contacts__phone-title">Телефон</p>
        <p className="contacts__phone">8 (800) 333-55-99</p>
        <p className="contacts__email-title">E-mail</p>
        <p className="contacts__email">info@avto-moto.ru</p>
      </div>
      <div className="contacts__map-wrapper">
        <Map />
      </div>
    </section>
  );
};

Contacts.propTypes = {};

export default Contacts;
