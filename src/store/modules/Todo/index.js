import * as todoActions from "./actions";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActions.ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          description: action.payload.description,
          resolved: false,
          filtered: false,
        },
      ];

    case todoActions.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    case todoActions.UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            resolved: action.payload.resolved,
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default todoReducer;
