import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  console.log("context todos: ", todos);
  console.log("filtered: ", filteredTodos);
  const createNewTodo = (text) => {
    let newTodo = {
      id: uuid(),
      text: text,
      isChecked: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleCheck = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const deleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.todoId !== todoId));
  };

  const clearCompletedTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isChecked));
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <TodoContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        todos,
        setTodos,
        toggleCheck,
        deleteTodo,
        clearCompletedTodos,
        createNewTodo,
        setFilteredTodos,
        filteredTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
