import React from "react";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";
import { useTodoContext } from "../context/TodoContext";
import TodoInput from "./TodoInput";

const TodoHeader = () => {
  const { isDarkMode, toggleDarkMode } = useTodoContext();
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold text-white text-2xl">TODO</h1>
        <button
          onClick={toggleDarkMode}
          className=" text-white py-2 px-4 rounded items-center"
        >
          <img
            src={isDarkMode ? sunIcon : moonIcon}
            alt={isDarkMode ? "Sun Icon" : "Moon Icon"}
            className="w-5 h-5 border-black"
          />
        </button>
      </div>
      <TodoInput />
    </div>
  );
};

export default TodoHeader;
