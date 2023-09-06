import Button from "./Button";
import Checkbox from "./Checkbox";

interface TodoItemProps {
  title: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ title }) => {
  return (
    <li className="flex gap-3 items-center">
      <div className="flex gap-1 items-center flex-1">
        <Checkbox className="text-3xl" />
        <span>{title}</span>
      </div>
      <div className="flex gap-1">
        <Button className="bg-neutral-800 px-3 py-1">Edit</Button>
        <Button className="bg-neutral-800 px-3 py-1">Remove</Button>
      </div>
    </li>
  );
};

export default TodoItem;
