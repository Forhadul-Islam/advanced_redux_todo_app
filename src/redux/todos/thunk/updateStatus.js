import { toggle_done } from "../actions";

const updateStatus = (todoId, currentStatus) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !currentStatus,
      }),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    });
    const todo = await res.json();
    dispatch(toggle_done(todo.id));
  };
};

export default updateStatus;
