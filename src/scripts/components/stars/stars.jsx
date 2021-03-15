import React from "react";
import PropTypes from "prop-types";

const STARS_NUMBER = 5;

const Stars = (props) => {
  const {className, activeClass, isActive, interactive, onStarClick} = props;

  return (
    <React.Fragment>
      {
        new Array(STARS_NUMBER).fill().map((item, starIndex) => {
          const customClass = isActive(starIndex)
            ? activeClass
            : ``;

          return (
            <button
              className={`${className} ${customClass}`}
              key={starIndex}
              type="button"
              data-star-number={starIndex + 1}
              onClick={onStarClick}
              disabled={!interactive}
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 15.92 15.38"
              >
                <path
                  d="M8.63145 0l1.87885 5.87336h6.0803l-4.919 3.62993 1.8789 5.87331-4.91905-3.6299-4.91903 3.6299 1.8789-5.87331L.672291 5.87336H6.75254L8.63145 0z"
                  fill="#BDBEC2"
                />
              </svg>
            </button>
          );
        })
      }
    </React.Fragment>
  );
};

Stars.propTypes = {
  className: PropTypes.string,
  activeClass: PropTypes.string,
  isActive: PropTypes.func,
  interactive: PropTypes.bool,
  onStarClick: PropTypes.func,
};

Stars.defaultProps = {
  className: ``,
  activeClass: ``,
  isActive: () => {},
  activeStars: false,
  onStarClick: () => {},
};

export default Stars;
