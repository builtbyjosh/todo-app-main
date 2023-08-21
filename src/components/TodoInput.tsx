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
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 border rounded-full border-blue-900 flex items-center justify-center`}
        ></div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="pl-12 pr-4 py-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Create a new todo..."
        />
      </label>
    </form>
  );
};

export default TodoInput;
