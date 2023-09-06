import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface TabsProps {
  tabs: Tab[];
  currentTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onTabChange, currentTab }) => {
  return (
    <ul className="flex rounded-md border-2 border-neutral-800 w-fit m-auto bg-neutral-800 gap-1">
      {tabs.map((tab) => (
        <li
          key={tab}
          className="bg-white last:rounded-r-md first:rounded-l-md overflow-hidden"
        >
          <Button
            className={twMerge(
              "text-neutral-800 px-2",
              `${currentTab === tab ? "bg-cyan-500" : "bg-white"}`
            )}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
