import PropTypes from "prop-types";

const reviewType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  advantages: PropTypes.string.isRequired,
  disadvantages: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
}).isRequired;

const reviewsType = PropTypes.arrayOf(reviewType).isRequired;

export {
  reviewType,
  reviewsType,
};
