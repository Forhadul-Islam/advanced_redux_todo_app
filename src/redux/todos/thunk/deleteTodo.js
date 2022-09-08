import { delete_todo } from "../actions";

const deleteTodo = (todoId) => async (dispatch) => {
  await fetch(`http://localhost:9000/todos/${todoId}`, {
    method: "DELETE",
  });

  dispatch(delete_todo(todoId));
};

export default deleteTodo;
