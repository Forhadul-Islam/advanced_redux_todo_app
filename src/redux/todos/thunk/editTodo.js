import { edit_todo, toggle_done } from "../actions";

const editTodo = (todoId, text) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        text: text,
      }),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    });
    const todo = await res.json();
    dispatch(edit_todo(todo.id, todo.text));
  };
};

export default editTodo;
