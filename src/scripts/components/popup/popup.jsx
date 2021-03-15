import React from "react";
import {connect} from "react-redux";
import Stars from "../stars/stars";
import PropTypes from "prop-types";
import {addNewReview} from "../../middlewares/thunk";
import {
  getFocusableElements,
  isEscKeyDown,
  getNextArrayIndex,
  getPreviousArrayIndex,
} from "../../utils";
import {Key} from "../../constants";

const CustomClass = {
  POPUP: `popup`,
  INPUT: `popup__form-input`,
  INVALID_INPUT: `popup__form-input--invalid`,
  STAR: `popup__form-rate-point`,
  STAR_CHECKED: `popup__form-rate-point--checked`
};

const checkRequiredInput = (input) => {
  if (input.value.length > 0) {
    return true;
  }

  return false;
};

const setInputStatus = (input) => {
  if (checkRequiredInput(input)) {
    if (input.classList.contains(CustomClass.INVALID_INPUT)) {
      input.classList.remove(CustomClass.INVALID_INPUT);
    }
  } else {
    input.classList.add(CustomClass.INVALID_INPUT);
  }
};

const handleInputEnter = (evt) => {
  setInputStatus(evt.target);
};

const Popup = (props) => {
  const {onCloseButtonClick, addReview} = props;

  const popupRef = React.createRef();
  const previousFocusableElement = React.useRef(document.activeElement);

  const handlePopupOverlayClick = React.useCallback(
      (evt) => {
        if (evt.target.classList.contains(CustomClass.POPUP)) {
          onCloseButtonClick();
        }
      },
      [onCloseButtonClick]
  );

  const handleAnimationEnd = React.useCallback(
      () => {
        const focusableElements = getFocusableElements(popupRef.current);

        focusableElements[0].focus();
      },
      [popupRef]
  );

  const handleEscKeyDown = React.useCallback(
      (evt) => {
        if (isEscKeyDown(evt)) {
          onCloseButtonClick();
        }
      },
      [onCloseButtonClick]
  );

  const handleFocusElementChange = React.useCallback(
      (evt) => {
        if (evt.key === Key.TAB) {
          const focusableElements = getFocusableElements(popupRef.current);
          let indexElement = 0;

          evt.preventDefault();

          if (evt.shiftKey) {
            indexElement = getPreviousArrayIndex(
                focusableElements.indexOf(document.activeElement),
                focusableElements
            );
          } else {
            indexElement = getNextArrayIndex(
                focusableElements.indexOf(document.activeElement),
                focusableElements
            );
          }

          focusableElements[indexElement].focus();
        }
      },
      [popupRef]
  );

  const handleSubmitButtonClick = React.useCallback(
      (evt) => {
        evt.preventDefault();

        const requiredInputs = Array.from(
            popupRef.current.querySelectorAll(`.${CustomClass.INPUT}[required]`)
        );

        let formValidity = true;
        requiredInputs.forEach((input) => {
          const inputValidity = checkRequiredInput(input);

          if (formValidity && !inputValidity) {
            formValidity = inputValidity;

            input.focus();
          }

          setInputStatus(input);
        });

        if (formValidity) {
          const newReview = Array.from(
              popupRef.current.querySelectorAll(`input, textarea`)
          )
            .map((input) => ({name: input.name, value: input.value}))
            .reduce((result, item) => {
              return {
                ...result,
                [item.name]: item.value
              };
            }, {});

          newReview.rate = parseInt(
              popupRef.current.querySelectorAll(`.${CustomClass.STAR_CHECKED}`).length,
              10
          );

          addReview(newReview);
          onCloseButtonClick();
        }
      },
      [popupRef, onCloseButtonClick, addReview]
  );

  const handleStarClick = React.useCallback(
      (evt) => {
        const rate = parseInt(
            evt.target.closest(`.${CustomClass.STAR}`).dataset[`starNumber`],
            10
        );

        popupRef.current.querySelectorAll(`.${CustomClass.STAR}`)
          .forEach((star, index) => {
            if (index < rate) {
              star.classList.add(CustomClass.STAR_CHECKED);
            } else {
              if (star.classList.contains(CustomClass.STAR_CHECKED)) {
                star.classList.remove(CustomClass.STAR_CHECKED);
              }
            }
          });
      },
      [popupRef]
  );

  React.useEffect(
      () => {
        document.addEventListener(`keydown`, handleEscKeyDown);
        document.addEventListener(`keydown`, handleFocusElementChange);

        return () => {
          document.removeEventListener(`keydown`, handleEscKeyDown);
          document.removeEventListener(`keydown`, handleFocusElementChange);

          // eslint-disable-next-line react-hooks/exhaustive-deps
          previousFocusableElement.current.focus();
        };
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
  );

  return (
    <div
      ref={popupRef}
      className={CustomClass.POPUP}
      onClick={handlePopupOverlayClick}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="popup__content">
        <form
          className="popup__form"
          method="POST"
          action="https://echo.htmlacademy.ru/"
        >
          <legend className="popup__form-title">
            Оставить отзыв
          </legend>
          <div className="popup__form-column">
            <div className="popup__form-input-wrapper">
              <input
                className={CustomClass.INPUT}
                type="text"
                name="name"
                placeholder="Имя"
                id="popup__form-input-name"
                onInput={handleInputEnter}
                required
              />
              <label
                className="popup__form-label"
                htmlFor="popup__form-input-name"
              >
                Пожалуйста, заполните поле
              </label>
            </div>
            <input
              className={CustomClass.INPUT}
              type="text"
              name="advantages"
              placeholder="Достоинства"
            />
            <input
              className={CustomClass.INPUT}
              type="text"
              name="disadvantages"
              placeholder="Недостатки"
            />
          </div>
          <div className="popup__form-column">
            <div className="popup__form-rate-wrapper">
              <p className="popup__form-rate-title">Оцените товар:</p>
              <div className="popup__form-rate-stars">
                <Stars
                  className={CustomClass.STAR}
                  interactive={true}
                  onStarClick={handleStarClick}
                />
              </div>
            </div>
            <div
              className="popup__form-input-wrapper popup__form-input-wrapper--right"
            >
              <textarea
                className={`${CustomClass.INPUT} popup__form-comment`}
                rows="5"
                cols="50"
                name="comment"
                placeholder="Комментарий"
                id="popup__form-input-comment"
                onInput={handleInputEnter}
                required
              >
              </textarea>
              <label
                className="popup__form-label"
                htmlFor="popup__form-input-comment"
              >
                Пожалуйста, заполните поле
              </label>
            </div>
          </div>
          <button
            className="popup__form-submit-button"
            type="submit"
            onClick={handleSubmitButtonClick}
          >
            Оставить отзыв
          </button>
        </form>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть окно"
          onClick={onCloseButtonClick}
        />
      </div>
    </div>
  );
};

Popup.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired,
  addReview: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addReview: (newReview) => {
    dispatch(addNewReview(newReview));
  },
});

export {Popup};
export default connect(null, mapDispatchToProps)(Popup);
