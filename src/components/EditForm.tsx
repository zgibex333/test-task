import { FiEdit3 } from "react-icons/fi";
import Button from "./Button";
import Input from "./Input";
import { useAppSelector } from "../hooks/useAppSelector";
import { selectCurrentTodoId } from "../store/modalSlice/modalSlice";
import { selectTodos } from "../store/todoSlice/todosSlice";
import { ChangeEvent, useState } from "react";

interface EditFormProps {
  onSave: (id: string, title: string) => void;
  onClose: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ onSave, onClose }) => {
  const currentTodoId = useAppSelector(selectCurrentTodoId);
  const currentTodo = useAppSelector(selectTodos).find(
    (todo) => todo.id === currentTodoId
  );
  const [inputValue, setInputValue] = useState<string>(
    currentTodo?.title ?? ""
  );

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSaveChanges = () => {
    if (currentTodo && inputValue) {
      onSave(currentTodo.id, inputValue);
    }
  };

  return (
    <section className="flex flex-col gap-8 w-[50vw] h-[50vh] items-center justify-center bg-white rounded-lg">
      <h3 className="text-3xl flex gap-1 items-center">
        <span>Editing Task</span>
        <FiEdit3 />
      </h3>
      <Input
        className="border-2 border-neutral-800 w-[50%]"
        value={inputValue}
        onChange={onChangeInput}
      />
      <div className="flex gap-1">
        <Button className="bg-neutral-800 px-3 py-2" onClick={onSaveChanges}>
          Save
        </Button>
        <Button className="bg-neutral-800 px-3 py-2" onClick={onClose}>Close</Button>
      </div>
    </section>
  );
};

export default EditForm;
