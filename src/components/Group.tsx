import Divider from "./Divider";
import TodoItem from "./TodoItem";

interface GroupProps {
  title: string;
}

const Group: React.FC<GroupProps> = ({ title }) => {
  return (
    <section className="my-4">
      <header className="flex justify-between items-center font-bold">
        <h2 className="text-3xl">{title}</h2>
        <div className="w-12 h-12 border-2 rounded-full flex items-center justify-center border-neutral-800">
          <span className="text leading-none text-2xl">0</span>
        </div>
      </header>
      <Divider />
      <ul className="flex flex-col gap-2">
        <TodoItem
          title=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit repellat
        minima distinctio, inventore nam quibusdam asperiores eligendi a
        deleniti blanditiis"
        />
      </ul>
    </section>
  );
};

export default Group;
