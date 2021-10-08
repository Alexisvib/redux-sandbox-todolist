import * as filterTodoActions from "./actions";

const initialState = false;

const toggleFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case filterTodoActions.TOGGLE_FILTER:
      return !state;
    default:
      return state;
  }
};

export default toggleFilterReducer;
