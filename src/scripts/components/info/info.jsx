import React from "react";
import PropertyTable from "../property-table/property-table";
import Reviews from "../reviews/reviews";
import Contacts from "../contacts/contacts";

const TABS = [
  {
    title: `Характеристики`,
    component: (<PropertyTable />),
  },
  {
    title: `Отзывы`,
    component: (<Reviews />),
  },
  {
    title: `Контакты`,
    component: (<Contacts />),

  }
];

const Info = () => {
  const [activeTab, setActiveTab] = React.useState(TABS[0]);

  return (
    <section className="info">
      <h2 className="info__title visually-hidden">Подробная информация</h2>
      <ul className="info__tabs-list">
        {
          TABS.map((tab, index) => {
            const active = activeTab === tab;
            const customClass = active ? `info__tab--active` : ``;

            return (
              <li key={index} className="info__tab-wrapper">
                <button
                  className={`info__tab ${customClass}`}
                  type="button"
                  onClick={setActiveTab.bind(null, tab)}
                  disabled={active}
                >
                  {tab.title}
                </button>
              </li>
            );
          })
        }
      </ul>
      {activeTab.component}
    </section>
  );
};

Info.propTypes = {};

export default Info;
