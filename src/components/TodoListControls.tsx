import { useState, useEffect } from "react";
import { useTodoContext } from "../context/TodoContext";
import TodoListFilter from "./TodoListFilter";

const TodoListControls = () => {
  const {
    todos,
    clearCompletedTodos,
    setFilteredTodos,
    setFilterBy,
    filterBy,
    setFilter,
  } = useTodoContext();

  const activeTodosCount = todos.filter(
    (todo: { isChecked: boolean }) => !todo.isChecked
  ).length;

  const handleClearCompleted = () => {
    clearCompletedTodos();
    setFilterBy("all");
  };

  return (
    <div className="text-xs flex items-center justify-between p-2 text-lightTheme-dark-grayish-blue">
      <p>{activeTodosCount} items left</p>

      <div className="hidden md:block">
        <TodoListFilter />
      </div>

      <button
        onClick={() => handleClearCompleted()}
        className="hover:text-primary-bright-blue"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoListControls;
