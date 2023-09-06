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
    <li className="flex gap-3 items-center">
      <div className="flex gap-1 items-center flex-1">
        <Checkbox
          className="text-3xl"
          checked={checked}
          onChange={onCheckedChange}
        />
        <span>{title}</span>
      </div>
      <div className="flex gap-1">
        <Button className="bg-neutral-800 px-3 py-1" onClick={onEditOpen}>
          Edit
        </Button>
        <Button className="bg-neutral-800 px-3 py-1" onClick={onRemove}>
          Remove
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
