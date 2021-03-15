import React from "react";

import slide1Img from "../../../images/slide-1.jpg";
import slide1Img2x from "../../../images/slide-1@2x.jpg";
import slide1ImgWebp from "../../../images/slide-1.webp";
import slide1ImgWebp2x from "../../../images/slide-1@2x.webp";
import slide1ImgMini from "../../../images/slide-1-mini.jpg";
import slide1ImgMini2x from "../../../images/slide-1-mini@2x.jpg";
import slide1ImgMiniWebp from "../../../images/slide-1-mini.webp";
import slide1ImgMiniWebp2x from "../../../images/slide-1-mini@2x.webp";

import slide2Img from "../../../images/slide-2.jpg";
import slide2Img2x from "../../../images/slide-2@2x.jpg";
import slide2ImgWebp from "../../../images/slide-2.webp";
import slide2ImgWebp2x from "../../../images/slide-2@2x.webp";
import slide2ImgMini from "../../../images/slide-2-mini.jpg";
import slide2ImgMini2x from "../../../images/slide-2-mini@2x.jpg";
import slide2ImgMiniWebp from "../../../images/slide-2-mini.webp";
import slide2ImgMiniWebp2x from "../../../images/slide-2-mini@2x.webp";

import slide3Img from "../../../images/slide-3.jpg";
import slide3Img2x from "../../../images/slide-3@2x.jpg";
import slide3ImgWebp from "../../../images/slide-3.webp";
import slide3ImgWebp2x from "../../../images/slide-3@2x.webp";
import slide3ImgMini from "../../../images/slide-3-mini.jpg";
import slide3ImgMini2x from "../../../images/slide-3-mini@2x.jpg";
import slide3ImgMiniWebp from "../../../images/slide-3-mini.webp";
import slide3ImgMiniWebp2x from "../../../images/slide-3-mini@2x.webp";

const ARROW = (
  <svg width="20" height="13" viewBox="0 0 20 13" >
    <path d="M19.3 6.5L13 .3m6.3 5.5l-6 6.2M19 6.2L0 6.4" stroke="#48494D" />
  </svg>
);

const SLIDES = [
  {
    img: slide1Img,
    img2x: slide1Img2x,
    imgWebp: slide1ImgWebp,
    imgWebp2x: slide1ImgWebp2x,
    imgMini: slide1ImgMini,
    imgMini2x: slide1ImgMini2x,
    imgMiniWebp: slide1ImgMiniWebp,
    imgMiniWebp2x: slide1ImgMiniWebp2x,
    alt: `Новый кузов.`,
  },
  {
    img: slide2Img,
    img2x: slide2Img2x,
    imgWebp: slide2ImgWebp,
    imgWebp2x: slide2ImgWebp2x,
    imgMini: slide2ImgMini,
    imgMini2x: slide2ImgMini2x,
    imgMiniWebp: slide2ImgMiniWebp,
    imgMiniWebp2x: slide2ImgMiniWebp2x,
    alt: `Кожанный салон.`,
  },
  {
    img: slide3Img,
    img2x: slide3Img2x,
    imgWebp: slide3ImgWebp,
    imgWebp2x: slide3ImgWebp2x,
    imgMini: slide3ImgMini,
    imgMini2x: slide3ImgMini2x,
    imgMiniWebp: slide3ImgMiniWebp,
    imgMiniWebp2x: slide3ImgMiniWebp2x,
    alt: `Уникальный дизайн приборной панели.`,
  }
];


const getActiveIndex = (activeSlide) => {
  return SLIDES.findIndex((slide) => slide === activeSlide);
};

const Slider = () => {
  const [activeSlide, setActiveSlide] = React.useState(SLIDES[0]);

  const setNextSlide = React.useCallback(
      () => {
        setActiveSlide(SLIDES[getActiveIndex(activeSlide) + 1]);
      },
      [activeSlide]
  );

  const setPreviousSlide = React.useCallback(
      () => {
        setActiveSlide(SLIDES[getActiveIndex(activeSlide) - 1]);
      },
      [activeSlide]
  );

  return (
    <section className="slider">
      <h2 className="slider__title visually-hidden">Галерея изображений</h2>
      <picture className="slider__img-wrapper">
        <source
          type="image/webp"
          srcSet={`${activeSlide.imgWebp}, ${activeSlide.imgWebp2x} 2x`}
        />
        <img
          className="slider__img"
          src={activeSlide.img}
          srcSet={`${activeSlide.img2x} 2x`}
          width="600"
          height="375"
          alt={activeSlide.alt}
        />
      </picture>
      <div className="slider__controls-wrapper">
        <button
          className="slider__control-button slider__control-button--previous"
          type="button"
          aria-label="Предыдущий слайд"
          onClick={setPreviousSlide}
          disabled={activeSlide === SLIDES[0] ? true : false}
        >
          {ARROW}
        </button>
        <ul className="slider__thumbnails-list">
          {
            SLIDES.map((slide, index) => (
              <li key={index} className="slider__thumbnail-wrapper">
                <picture className="slider__thumbnails-picture">
                  <source
                    type="image/webp"
                    srcSet={`${slide.imgMiniWebp}, ${slide.imgMiniWebp2x} 2x`}
                  />
                  <img
                    className="slider__thumbnails-img"
                    src={slide.imgMini}
                    srcSet={`${slide.imgMini2x} 2x`}
                    width="128"
                    height="80"
                    alt={slide.alt}
                  />
                </picture>
              </li>
            ))
          }
        </ul>
        <button
          className="slider__control-button slider__control-button--next"
          type="button"
          aria-label="Следующий слайд"
          onClick={setNextSlide}
          disabled={activeSlide === SLIDES[SLIDES.length - 1] ? true : false}
        >
          {ARROW}
        </button>
      </div>
    </section>
  );
};

Slider.propTypes = {};

export default Slider;
