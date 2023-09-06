import { ChangeEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch } from "../hooks/useAppDispatch";
import useDebounce from "../hooks/useDebounce";
import { addTodo } from "../store/todoSlice/todosSlice";
import Button from "./Button";
import Input from "./Input";
import "react-toastify/dist/ReactToastify.css";

const MAX_LENGTH = 50;
const ERR_MSG = `Max.length is ${MAX_LENGTH} symbols.`;
const Header = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedInputValue = useDebounce(inputValue, 1000);
  const canSubmitTodo = inputValue.length <= 50 && inputValue.length;

  useEffect(() => {
    if (debouncedInputValue.length > 50) toast.warn(ERR_MSG);
  }, [debouncedInputValue]);

  const onAddTodo = () => {
    dispatch(
      addTodo({
        title: inputValue,
      })
    );
    setInputValue("");
  };
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <header className="bg-neutral-800 flex flex-col md:flex-row items-center justify-between px-8 py-3 lg:px-36">
        <h1 className="text text-3xl font-bold text-white">ToDo List</h1>
        <div>
          <div className="flex flex-col items-center md:flex-row md:items-stretch gap-2 w-full">
            <Input
              placeholder="Max. 50 symbols"
              className="p-1  min-w-[240px] md:min-w-[360px]"
              type="text"
              value={inputValue}
              onChange={onInputChange}
            />
            <Button
              className="text bg-cyan-500 px-3 py-2"
              onClick={onAddTodo}
              disabled={!canSubmitTodo}
            >
              Add A New Task
            </Button>
          </div>
        </div>
      </header>
      <ToastContainer
        position="bottom-center"
        hideProgressBar
        autoClose={3000}
      />
    </>
  );
};

export default Header;
