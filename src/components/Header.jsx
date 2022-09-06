import { useState } from "react";
import { useDispatch } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import {
  add_todo,
  clear_completed_todo,
  complete_all_todo,
} from "../redux/todos/actions";

export default function Header() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    text.trim().length && dispatch(add_todo(text));
    setText("");
  };

  //handle all complete
  const handleAllComplete = () => {
    dispatch(complete_all_todo());
  };

  // handle clear completed
  const handleClearCompleted = () => {
    dispatch(clear_completed_todo());
  };
  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={handleAllComplete}
          className="flex space-x-1 cursor-pointer"
        >
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={handleClearCompleted} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
}
