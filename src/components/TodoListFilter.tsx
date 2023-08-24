import { useEffect } from "react";
import { useTodoContext } from "../context/TodoContext";

const TodoListFilter = () => {
  const { todos, filterBy, setFilterBy, setFilter } = useTodoContext();

  useEffect(() => {
    setFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, filterBy]);
  return (
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
  );
};

export default TodoListFilter;
