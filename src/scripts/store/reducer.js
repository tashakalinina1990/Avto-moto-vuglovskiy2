import {ActionType} from "./actions";

const initialState = {
  reviews: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        ...{reviews: action.payload}
      };
    case ActionType.ADD_NEW_REVIEW:
      const reviews = state.reviews;
      reviews.push(action.payload);

      return {
        ...state,
        ...{reviews}
      };
    default:
      return state;
  }
};

export default reducer;
