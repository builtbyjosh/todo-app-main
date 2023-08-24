import { useEffect } from "react";
import TodoCard from "./TodoCard";
import { TodoType } from "../types";
import { useTodoContext } from "../context/TodoContext";
import TodoListControls from "./TodoListControls";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TodoList = () => {
  const { todos, filteredTodos, setFilteredTodos } = useTodoContext();
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleDragEnd = (result: { destination: any; source: any }) => {
    if (!result.destination) return;

    const items = Array.from(filteredTodos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFilteredTodos(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todo-list" type="TODO_CARD">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="w-full min-h-screen todo-list drop-shadow-2xl rounded bg-lightTheme-very-light-gray dark:bg-darkTheme-very-dark-desaturated-blue flex flex-col"
          >
            {filteredTodos.map(
              (
                todo: { id: any; text: string; isChecked: boolean },
                index: number
              ) => (
                <Draggable
                  key={todo.id}
                  draggableId={todo.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TodoCard todo={todo} index={index} />
                    </div>
                  )}
                </Draggable>
              )
            )}
            <div className="mt-auto">
              <TodoListControls />
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
