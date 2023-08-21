import { useTodoContext } from "../context/TodoContext";
import TodoCheckBox from "./TodoCheckBox";
import { TodoType } from "../types";

const TodoCard = (props: { todo: TodoType }) => {
  const { id, text, isChecked } = props.todo;
  const { toggleCheck } = useTodoContext();

  return (
    <div className="flex items-center m-2 py-2">
      <TodoCheckBox isChecked={isChecked} onChange={() => toggleCheck(id)} />
      <p className="ml-2">{text}</p>
    </div>
  );
};

export default TodoCard;
