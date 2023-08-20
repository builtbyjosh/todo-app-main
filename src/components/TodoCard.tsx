import React from "react";
import checkMark from "../images/icon-check.svg";
import { useTodoContext } from "../context/TodoContext";
type TodoDetails = {
  text: string;
  isChecked: boolean;
  toggleCheck: React.ChangeEventHandler<HTMLInputElement>;
};

const TodoCard = (todoDetails: TodoDetails) => {
  const { text, isChecked, toggleCheck } = todoDetails;
  const { isDarkMode } = useTodoContext();

  return (
    <div>
      <label className="flex items-center cursor-pointer">
        <div className="w-6 h-6 border border-gray-300 rounded-full mr-2 flex items-center justify-center">
          {isChecked && (
            <img
              src={checkMark}
              alt="Checkmark"
              className="w-4 h-4 text-green-500"
            />
          )}
        </div>
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={toggleCheck}
        />
      </label>
      <h4>{text}</h4>
    </div>
  );
};

export default TodoCard;
