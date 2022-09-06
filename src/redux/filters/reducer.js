import { CHANGE_COLOR, CHANGE_STATUS } from "./actionType";
import initialState from "./initialState";

const filterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_STATUS:
      return { ...state, status: payload.status };
    case CHANGE_COLOR:
      const colorIdx = state.colors.indexOf(payload.color);
      let newColors;
      if (colorIdx > -1) {
        newColors = state.colors.filter((color) => color !== payload.color);
      } else {
        newColors = [...state.colors, payload.color];
      }
      return { ...state, colors: newColors };

    default:
      return state;
  }
};

export default filterReducer;
