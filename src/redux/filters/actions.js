import { CHANGE_COLOR, CHANGE_STATUS } from "./actionType";

export const change_status = (status) => {
  return {
    type: CHANGE_STATUS,
    payload: {
      status,
    },
  };
};

export const change_colors = (color) => {
  return {
    type: CHANGE_COLOR,
    payload: {
      color,
    },
  };
};
