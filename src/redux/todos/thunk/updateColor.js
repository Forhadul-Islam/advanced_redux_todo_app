import { set_color } from "../actions";

const updateColor = (todoId, color) => async (dispatch) => {
  const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
    method: "PATCH",
    body: JSON.stringify({
      color: color,
    }),
    headers: {
      "Content-type": "application/json; charset = UTF-8",
    },
  });
  const todo = await res.json();
  dispatch(set_color(todo.id, todo.color));
};

export default updateColor;
