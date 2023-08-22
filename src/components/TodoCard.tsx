import { useTodoContext } from "../context/TodoContext";
import TodoCheckBox from "./TodoCheckBox";
import TodoIconCross from "../images/icon-cross.svg";
import { TodoType } from "../types";

const TodoCard = (props: { todo: TodoType }) => {
  const { id, text, isChecked } = props.todo;
  const { toggleCheck, deleteTodo, setActiveTodo, activeTodo } =
    useTodoContext();

  return (
    <div
      onClick={() => setActiveTodo(id)}
      className="flex items-center justify-between m-2 py-2 text-lightTheme-dark-grayish-blue dark:text-darkTheme-very-dark-grayish-blue"
    >
      <div className="flex items-center">
        <TodoCheckBox isChecked={isChecked} onChange={() => toggleCheck(id)} />
        <p className="ml-2">{text}</p>
      </div>
      {activeTodo === id && (
        <button onClick={() => deleteTodo(id)}>
          <img src={TodoIconCross} alt="" />
        </button>
      )}
    </div>
  );
};

export default TodoCard;
