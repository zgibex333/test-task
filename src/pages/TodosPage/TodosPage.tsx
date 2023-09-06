import { useState } from "react";
import Group from "../../components/Group";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import { selectTodos } from "../../store/todoSlice/todosSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import EditModal from "../../components/EditModal";

const tabs: Tab[] = ["active", "completed", "all"];

const TodosPage = () => {
  const [currentTab, setCurrentTab] = useState<Tab>("all");
  const onTabChange = (tab: Tab) => {
    setCurrentTab(tab);
  };
  const activeTodos = useAppSelector(selectTodos).filter(
    (todo) => !todo.checked
  );
  const completedTodos = useAppSelector(selectTodos).filter(
    (todo) => todo.checked
  );
  const isEmpty = !activeTodos.length && !completedTodos.length;
  const showActive =
    !isEmpty && (currentTab === "active" || currentTab === "all");
  const showCompleted =
    !isEmpty && (currentTab === "completed" || currentTab === "all");
  return (
    <>
      <Header />
      <main className="px-8 py-3 lg:px-36">
        {!isEmpty && (
          <Tabs tabs={tabs} onTabChange={onTabChange} currentTab={currentTab} />
        )}
        {showActive && <Group title="To do" todos={activeTodos} />}
        {showCompleted && <Group title="Done" todos={completedTodos} />}
        {isEmpty && (
          <h3 className="text-center text-3xl">Add a new task to start</h3>
        )}
        <EditModal />
      </main>
    </>
  );
};

export default TodosPage;
