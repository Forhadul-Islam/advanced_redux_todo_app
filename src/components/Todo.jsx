import { useState } from "react";
import { useDispatch } from "react-redux";
import cancelImage from "../assets/images/cancel.png";
import { delete_todo, set_color, toggle_done } from "../redux/todos/actions";
import deleteTodo from "../redux/todos/thunk/deleteTodo";
import editTodo from "../redux/todos/thunk/editTodo";
import updateColor from "../redux/todos/thunk/updateColor";
import updateStatus from "../redux/todos/thunk/updateStatus";

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const { id, text, completed, color } = todo;
  const [showEditForm, setShowEditForm] = useState(false);
  const [todoText, setTodoText] = useState(text);
  const toggleTodoHandler = (id) => {
    dispatch(updateStatus(id, completed));
  };
  const setColorHandler = (id, color) => {
    dispatch(updateColor(id, color));
  };

  //delete todo with id
  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (e) => {
    e.preventDefault();
    dispatch(editTodo(id, todoText));
    setShowEditForm(false);
  };
  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div className=" relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
        <input
          onClick={() => toggleTodoHandler(id)}
          type="checkbox"
          className="opacity-0 absolute rounded-full"
        />
        <svg
          className={`${
            !completed && "hidden"
          } fill-current w-3 h-3 text-green-500 pointer-events-none`}
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>

      {!showEditForm && (
        <div className={`select-none flex-1 ${completed && "line-through"}`}>
          {text}
        </div>
      )}
      {showEditForm && (
        <form onSubmit={handleEditTodo} className={` select-none flex-1 `}>
          <input
            onChange={(e) => setTodoText(e.target.value)}
            type="text"
            value={todoText}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </form>
      )}

      <div
        onClick={() => setColorHandler(id, "green")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          color == "green" && "bg-green-500"
        }`}
      ></div>

      <div
        onClick={() => setColorHandler(id, "yellow")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        }`}
      ></div>

      <div
        onClick={() => setColorHandler(id, "red")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          color === "red" && "bg-red-500"
        }`}
      ></div>

      <div
        onClick={() => setShowEditForm(!showEditForm)}
        className="p-1 bg-gray-100 rounded-full h-8 w-8 cursor-pointer text-center"
      >
        {!showEditForm ? "🖋️" : "🧨"}
      </div>
      <img
        onClick={() => deleteHandler(id)}
        src={cancelImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
}
