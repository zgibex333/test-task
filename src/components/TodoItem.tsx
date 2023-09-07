import { FiEdit3 } from "react-icons/fi";
import { BiTrashAlt } from "react-icons/bi";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { openModal, setCurrentTodo } from "../store/modalSlice/modalSlice";
import { removeTodo, updateTodo } from "../store/todoSlice/todosSlice";
import Button from "./Button";
import Checkbox from "./Checkbox";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo: { checked, title, id },
}) => {
  const dispatch = useAppDispatch();
  const onCheckedChange = () => {
    dispatch(
      updateTodo({
        id,
        checked: !checked,
      })
    );
  };

  const onRemove = () => {
    dispatch(removeTodo({ id }));
  };

  const onEditOpen = () => {
    dispatch(setCurrentTodo({ id }));
    dispatch(openModal());
  };

  return (
    <li className="flex gap-3 items-center" data-testid="todo-item">
      <div className="flex gap-1 items-center flex-1">
        <Checkbox
          className="text-3xl"
          checked={checked}
          onChange={onCheckedChange}
        />
        <span className="break-all">{title}</span>
      </div>
      <div className="flex gap-1">
        <Button
          className="bg-neutral-800 px-3 py-1"
          onClick={onEditOpen}
          data-testid="edit-item"
        >
          <span className="hidden md:inline">Edit</span>
          <FiEdit3 className="inline-block md:hidden" />
        </Button>
        <Button
          className="bg-neutral-800 px-3 py-1"
          onClick={onRemove}
          data-testid="remove-item"
        >
          <span className="hidden md:inline">Remove</span>
          <BiTrashAlt className="inline-block md:hidden" />
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
