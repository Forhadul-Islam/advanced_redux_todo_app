import { useDispatch, useSelector } from "react-redux";
import { change_colors, change_status } from "../redux/filters/actions";

const leftTask = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return "No task";
    case 1:
      return "1 task";
    default:
      return `${no_of_todos} tasks`;
  }
};

export default function Footer() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const leftIncompletedTask = todos.filter((todo) => !todo.completed).length;

  const changeStatusHandler = (status) => {
    dispatch(change_status(status));
  };

  const changeColorHandler = (color) => {
    dispatch(change_colors(color));
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{leftTask(leftIncompletedTask)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => changeStatusHandler("All")}
          className={`cursor-pointer ${
            filters.status === "All" && "font-bold"
          } `}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => changeStatusHandler("Incomplete")}
          className={`cursor-pointer ${
            filters.status === "Incomplete" && "font-bold"
          } `}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => changeStatusHandler("Complete")}
          className={`cursor-pointer ${
            filters.status === "Complete" && "font-bold"
          } `}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => changeColorHandler("green")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filters.colors.includes("green") && "bg-green-500"
          }`}
        ></li>
        <li
          onClick={() => changeColorHandler("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filters.colors.includes("red") && "bg-red-500"
          }`}
        ></li>
        <li
          onClick={() => changeColorHandler("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filters.colors.includes("yellow") && "bg-yellow-500"
          }`}
        ></li>
      </ul>
    </div>
  );
}
