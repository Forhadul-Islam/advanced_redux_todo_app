import {
  ADD_TODO,
  CLEAR_COMPLETED_TODO,
  COMPLETE_ALL_TODO,
  DELETE_TODO,
  LOAD_TODOS,
  SET_COLOR,
  TOGGLE_DONE,
} from "./actionType";

export const load_todos = (todos) => {
  return {
    type: LOAD_TODOS,
    payload: {
      todos,
    },
  };
};

export const add_todo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      todo,
    },
  };
};
export const delete_todo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: {
      todoId,
    },
  };
};

export const set_color = (todoId, color) => {
  return {
    type: SET_COLOR,
    payload: {
      todoId,
      color,
    },
  };
};

export const toggle_done = (todoId) => {
  return {
    type: TOGGLE_DONE,
    payload: {
      todoId,
    },
  };
};

export const complete_all_todo = () => {
  return {
    type: COMPLETE_ALL_TODO,
  };
};

export const clear_completed_todo = () => {
  return {
    type: CLEAR_COMPLETED_TODO,
  };
};
