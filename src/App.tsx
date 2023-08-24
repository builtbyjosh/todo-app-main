import React from "react";
import lightDesktopBg from "./images/bg-desktop-light.jpg";
import darkDesktopBg from "./images/bg-desktop-dark.jpg";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import { useTodoContext } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import TodoListFilter from "./components/TodoListFilter";

function App() {
  const { isDarkMode } = useTodoContext();
  return (
    <div
      className={`${
        isDarkMode ? "dark " : ""
      } relative flex justify-center h-full bg-lightTheme-very-light-grayish-blue dark:bg-darkTheme-very-dark-blue `}
    >
      <div className="absolute inset-0 z-0">
        <img src={isDarkMode ? darkDesktopBg : lightDesktopBg} alt="" />
      </div>
      <div className="relative z-10 w-4/5 md:w-1/2 mt-4 space-y-4">
        <TodoHeader />
        <TodoList />
        <div className="md:hidden flex w-full items-center text-xs text-lightTheme-dark-grayish-blue justify-center p-2 drop-shadow-2xl rounded bg-lightTheme-very-light-gray dark:bg-darkTheme-very-dark-desaturated-blue">
          <TodoListFilter />
        </div>
        <div>
          <p className="justify-center text-center text-sm text-lightTheme-dark-grayish-blue">
            Drag and drop to reorder list
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
