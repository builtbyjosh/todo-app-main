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
  }, [todos, filterBy]);

  const activeTodosCount = todos.filter(
    (todo: { isChecked: boolean }) => !todo.isChecked
  ).length;

  return (
    <div className="text-xs flex items-center justify-between p-2">
      <p>{activeTodosCount} items left</p>
      <div className="space-x-2">
        <button onClick={() => setFilterBy("all")}>All</button>
        <button onClick={() => setFilterBy("active")}>Active</button>
        <button onClick={() => setFilterBy("completed")}>Completed</button>
      </div>
      <button onClick={clearCompletedTodos}>Clear Completed</button>
    </div>
  );
};

export default TodoListControls;
