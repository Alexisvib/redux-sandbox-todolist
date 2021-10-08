export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addTodo = (descriptionTodo) => {
  return {
    type: ADD_TODO,
    payload: {
      description: descriptionTodo,
    },
  };
};

export const removeTodo = (todoId) => {
  return {
    type: REMOVE_TODO,
    payload: {
      id: todoId,
    },
  };
};

export const updateTodo = (todoId, todoResolved) => {
  return {
    type: UPDATE_TODO,
    payload: {
      id: todoId,
      resolved: todoResolved,
    },
  };
};
