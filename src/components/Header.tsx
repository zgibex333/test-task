import Button from "./Button";
import Input from "./Input";

const Header = () => {
  return (
    <header className="bg-neutral-800 flex items-center justify-between px-36 py-3">
      <h1 className="text text-3xl font-bold text-white">ToDo List</h1>
      <div>
        <div className="flex gap-2 w-full">
          <Input
            placeholder="Max. 50 symbols"
            className="p-1 min-w-[360px]"
            type="text"
          />
          <Button className="text bg-cyan-500 px-3 py-2">Add A New Task</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
