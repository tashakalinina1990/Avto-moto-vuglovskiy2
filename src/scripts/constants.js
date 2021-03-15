const FOCUS_ELEMENTS = [
  `a[href]`,
  `input:not([disabled])`,
  `button:not([disabled])`,
  `select`,
  `textarea`,
  `[tabindex]`
];

const Key = {
  ENTER: `Enter`,
  ESC: `Escape`,
  SPACE: ` `,
  TAB: `Tab`,
  SHIFT: `Shift`,
  UP: `ArrowUp`,
  DOWN: `ArrowDown`,
};

const AVTO_MOTO_KEY = `avto-moto`;

const DEFAULT_REVIEWS = [
  {
    name: `Борис Иванов`,
    advantages: `мощность, внешний вид`,
    disadvantages: `Слабые тормозные колодки (пришлось заменить)`,
    comment: `Взяли по трейд-ин, на выгодных условиях у дилера.
            Стильная внешка и крут по базовым характеристикам.
            Не думал, что пересяду на китайский автопром,
            но сейчас гоняю и понимаю, что полностью доволен.`,
    rate: 3,
  },
  {
    name: `Марсель Исмагилов`,
    advantages: `Cтиль, комфорт, управляемость`,
    disadvantages: `Дорогой ремонт и обслуживание`,
    comment: `Дизайн отличный, управление просто шикарно,
          ощущения за рулём такой машины особые. Но ремонт очень дорогой.
          Пару месяцев назад пришлось менять двигатель.
          По стоимости вышло как новый автомобиль.
          Так что, если покупать эту машину,
          надо быть готовым к большим расходам на обслуживание.`,
    rate: 3,
  }
];

export {
  FOCUS_ELEMENTS,
  Key,
  AVTO_MOTO_KEY,
  DEFAULT_REVIEWS,
};
