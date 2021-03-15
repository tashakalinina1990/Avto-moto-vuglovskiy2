import React from "react";

const PROPERTIES = [
  {
    name: `Трансмиссия`,
    value: `Роботизированная`,
  },
  {
    name: `Мощность двигателя, л.с.`,
    value: `249`,
  },
  {
    name: `Тип двигателя`,
    value: `Бензиновый`,
  },
  {
    name: `Привод`,
    value: `Полный`,
  },
  {
    name: `Объем двигателя, л`,
    value: `2.4`,
  },
  {
    name: `Макс. крутящий момент`,
    value: `370/4500`,
  },
  {
    name: `Количество цилиндров`,
    value: `4`,
  }
];

const PropertyTable = () => {
  return (
    <section className="property-table">
      <h3 className="property-table__title visually-hidden">Характеристики</h3>
      <ul className="property-table__properties-list">
        {
          PROPERTIES.map((property, index) => (
            <li key={index} className="property-table__property-wrapper">
              <p className="property-table__property-name">
                {property.name}
              </p>
              <p className="property-table__property-value">
                {property.value}
              </p>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

PropertyTable.propTypes = {};

export default PropertyTable;
