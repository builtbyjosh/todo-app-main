import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

const TodoInput: React.FC = () => {
  const { createNewTodo } = useTodoContext();
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputText.trim() !== "") {
      createNewTodo(inputText);
      setInputText("");
    }
  };

  return (
    <form onSubmit={handleInputSubmit}>
      <label className="relative flex items-center">
        <div
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 border rounded-full bg-gradient-to-r from-blue-300 to-purple-600 flex items-center justify-center`}
        >
          <div className="w-5 h-5 dark:bg-darkTheme-very-dark-desaturated-blue bg-lightTheme-very-light-gray rounded-full"></div>
        </div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="pl-12 pr-4 py-2 w-full text-lightTheme-dark-grayish-blue dark:bg-darkTheme-very-dark-desaturated-blue bg-lightTheme-very-light-gray  rounded focus:outline-none "
          placeholder="Create a new todo..."
        />
      </label>
    </form>
  );
};

export default TodoInput;
