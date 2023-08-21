import { useEffect } from "react";
import TodoCard from "./TodoCard";
import { TodoType } from "../types";
import { useTodoContext } from "../context/TodoContext";
import TodoListControls from "./TodoListControls";

const TodoList = () => {
  const { todos, filteredTodos } = useTodoContext();
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div className="w-full border rounded bg-white">
      {filteredTodos.map((todo: TodoType) => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
      <TodoListControls />
    </div>
  );
};

export default TodoList;
