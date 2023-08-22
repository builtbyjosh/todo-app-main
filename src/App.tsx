import React from "react";
import lightDesktopBg from "./images/bg-desktop-light.jpg";
import darkDesktopBg from "./images/bg-desktop-dark.jpg";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import { useTodoContext } from "./context/TodoContext";
import TodoList from "./components/TodoList";

function App() {
  const { isDarkMode } = useTodoContext();
  return (
    <div
      className={`${
        isDarkMode ? "dark " : ""
      } relative flex justify-center h-screen bg-lightTheme-very-light-grayish-blue dark:bg-darkTheme-very-dark-blue `}
    >
      <div className="absolute inset-0 z-0">
        <img src={isDarkMode ? darkDesktopBg : lightDesktopBg} alt="" />
      </div>
      <div className="relative z-10 w-1/2 mt-4 space-y-4">
        <TodoHeader />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
