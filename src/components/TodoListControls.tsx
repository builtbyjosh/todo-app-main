import { useState, useEffect } from "react";
import { useTodoContext } from "../context/TodoContext";

const TodoListControls = () => {
  const { todos, clearCompletedTodos, setFilteredTodos } = useTodoContext();
  const [filterBy, setFilterBy] = useState("all");

  const setFilter = () => {
    let filteredTodos;
    if (filterBy === "all") {
      filteredTodos = todos;
    } else if (filterBy === "active") {
      filteredTodos = todos.filter(
        (todo: { isChecked: boolean }) => !todo.isChecked
      );
    } else if (filterBy === "completed") {
      filteredTodos = todos.filter(
        (todo: { isChecked: boolean }) => todo.isChecked
      );
    }
    setFilteredTodos(filteredTodos);
  };

  useEffect(() => {
    setFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, filterBy]);

  const activeTodosCount = todos.filter(
    (todo: { isChecked: boolean }) => !todo.isChecked
  ).length;

  return (
    <div className="text-xs flex items-center justify-between p-2 text-lightTheme-dark-grayish-blue">
      <p>{activeTodosCount} items left</p>
      <div className="space-x-2">
        <button
          onClick={() => setFilterBy("all")}
          className={
            filterBy === "all"
              ? "text-primary-bright-blue"
              : "hover:text-primary-bright-blue"
          }
        >
          All
        </button>
        <button
          onClick={() => setFilterBy("active")}
          className={
            filterBy === "active"
              ? "text-primary-bright-blue"
              : "hover:text-primary-bright-blue"
          }
        >
          Active
        </button>
        <button
          onClick={() => setFilterBy("completed")}
          className={
            filterBy === "completed"
              ? "text-primary-bright-blue"
              : "hover:text-primary-bright-blue"
          }
        >
          Completed
        </button>
      </div>
      <button
        onClick={clearCompletedTodos}
        className="hover:text-primary-bright-blue"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoListControls;
