import { useTodoContext } from "../context/TodoContext";
import TodoCheckBox from "./TodoCheckBox";
import TodoIconCross from "../images/icon-cross.svg";
import { TodoType } from "../types";
import { Draggable } from "react-beautiful-dnd";

const TodoCard = (props: { todo: TodoType; index: number }) => {
  const { id, text, isChecked } = props.todo;
  const { toggleCheck, deleteTodo, setActiveTodo, activeTodo } =
    useTodoContext();
  const todoIndex = props.index;
  console.log("INDEX: ", todoIndex);
  return (
    <Draggable draggableId={id} index={todoIndex}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={() => setActiveTodo(id)}
          className="flex items-center justify-between m-2 py-2 text-lightTheme-dark-grayish-blue dark:text-darkTheme-very-dark-grayish-blue"
        >
          <div className="flex items-center">
            <TodoCheckBox
              isChecked={isChecked}
              onChange={() => toggleCheck(id)}
            />
            <p className="ml-2">{text}</p>
          </div>
          {activeTodo === id && (
            <button onClick={() => deleteTodo(id)}>
              <img src={TodoIconCross} alt="" />
            </button>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default TodoCard;
