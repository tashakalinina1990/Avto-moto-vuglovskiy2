const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  ADD_NEW_REVIEW: `ADD_NEW_REVIEW`,
};

const ActionCreator = {
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  addNewReview: (review) => ({
    type: ActionType.ADD_NEW_REVIEW,
    payload: review,
  }),
};

export {
  ActionType,
  ActionCreator,
};
