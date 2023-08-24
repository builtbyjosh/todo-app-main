import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [activeTodo, setActiveTodo] = useState("");
  const [filterBy, setFilterBy] = useState("all");

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
    console.log("delete todo: ", todoId);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const clearCompletedTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isChecked));
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const setFilter = () => {
    let filteredTodos;
    if (filterBy === "all") {
      filteredTodos = todos;
    } else if (filterBy === "active") {
      filteredTodos = todos.filter((todo) => !todo.isChecked);
    } else if (filterBy === "completed") {
      filteredTodos = todos.filter((todo) => todo.isChecked);
    }
    setFilteredTodos(filteredTodos);
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
        activeTodo,
        setActiveTodo,
        filterBy,
        setFilterBy,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
