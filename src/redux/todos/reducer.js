import {
  ADD_TODO,
  CLEAR_COMPLETED_TODO,
  COMPLETE_ALL_TODO,
  DELETE_TODO,
  LOAD_TODOS,
  SET_COLOR,
  TOGGLE_DONE,
} from "./actionType";
import initialState from "./initialState";

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_TODOS:
      return [...payload.todos];
    case ADD_TODO:
      return [...state, payload.todo];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload.todoId);
    case SET_COLOR:
      const updatedState = state.map((todo) => {
        if (todo.id == payload.todoId) {
          return {
            ...todo,
            color: payload.color,
          };
        }
        return todo;
      });
      return updatedState;
    case TOGGLE_DONE:
      return state.map((todo) => {
        if (todo.id !== payload.todoId) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case COMPLETE_ALL_TODO:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEAR_COMPLETED_TODO:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export default todoReducer;

const IdGenerator = (state) => {
  let id = state.reduce((max, todo) => Math.max(max, todo.id), -1) + 1;
  return id;
};
