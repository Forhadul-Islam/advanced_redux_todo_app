import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const { status, colors } = useSelector((state) => state.filters);
  const filteredTodos = todos
    .filter((todo) => {
      switch (status) {
        case "Complete":
          return todo.completed;
        case "Incomplete":
          return !todo.completed;
        default:
          return todo;
      }
    })
    .filter((todo) => {
      return colors.length > 0 ? colors.includes(todo.color) : true;
    });

  useEffect(() => {
    dispatch(fetchTodos);
  }, []);
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {filteredTodos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
