import {toast} from "react-toastify";
import {FOCUS_ELEMENTS, Key} from "./constants";

const handleBlankLinkClick = (evt) => {
  evt.preventDefault();

  toast.info(`Функционал отсутствует`);
};

const getFocusableElements = (container) => {
  return Array.from(
      container.querySelectorAll(FOCUS_ELEMENTS)
  );
};

const isEscKeyDown = (evt) => {
  return evt.key === Key.ESC;
};

const getNextArrayIndex = (currentIndex, arr) => {
  return (currentIndex + 1) % arr.length;
};

const getPreviousArrayIndex = (currentIndex, arr) => {
  return (currentIndex + (arr.length - 1)) % arr.length;
};

export {
  handleBlankLinkClick,
  getFocusableElements,
  isEscKeyDown,
  getNextArrayIndex,
  getPreviousArrayIndex,
};
