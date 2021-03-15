import {ActionCreator} from "../store/actions";
import {AVTO_MOTO_KEY, DEFAULT_REVIEWS} from "../constants";

const loadReviews = () => (dispatch, _getState) => {
  let existReviews = JSON.parse(localStorage.getItem(AVTO_MOTO_KEY));
  existReviews = existReviews ? existReviews : [];

  const reviews = [
    ...DEFAULT_REVIEWS,
    ...existReviews
  ];

  dispatch(ActionCreator.loadReviews(reviews));
};

const addNewReview = (newReview) => (dispatch, _getState) => {
  let reviews = JSON.parse(localStorage.getItem(AVTO_MOTO_KEY));
  reviews = reviews ? reviews : [];

  reviews.push(newReview);

  localStorage.setItem(AVTO_MOTO_KEY, JSON.stringify(reviews));

  dispatch(ActionCreator.addNewReview(newReview));
};

export {
  loadReviews,
  addNewReview,
};
