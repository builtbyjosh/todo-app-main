import React from "react";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";
import { useTodoContext } from "../context/TodoContext";

const TodoHeader = () => {
  const { isDarkMode, toggleDarkMode } = useTodoContext();
  return (
    <div>
      <div>
        <h1>TODO</h1>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? sunIcon : moonIcon}
        </button>
      </div>
    </div>
  );
};

export default TodoHeader;
