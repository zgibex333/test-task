import Divider from "./Divider";
import TodoItem from "./TodoItem";

interface GroupProps {
  title: string;
  todos: Todo[];
}

const Group: React.FC<GroupProps> = ({ title, todos }) => {
  return (
    <section className="my-4">
      <header className="flex justify-between items-center font-bold">
        <h2 className="text-3xl">{title}</h2>
        <div className="w-12 h-12 border-2 rounded-full flex items-center justify-center border-neutral-800">
          <span className="text leading-none text-2xl">{todos.length}</span>
        </div>
      </header>
      <Divider />
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};

export default Group;
