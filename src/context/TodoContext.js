import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <TodoContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </TodoContext.Provider>
  );
};
