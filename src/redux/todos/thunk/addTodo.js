import { add_todo } from "../actions";

const addTodo = (text) => async (dispatch) => {
  const res = await fetch(`http://localhost:9000/todos/`, {
    method: "POST",
    body: JSON.stringify({
      text: text,
      completed: false,
    }),
    headers: {
      "Content-type": "application/json; charset = UTF-8",
    },
  });
  const todo = await res.json();
  dispatch(add_todo(todo));
};

export default addTodo;
