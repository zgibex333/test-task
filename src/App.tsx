import { twMerge } from "tailwind-merge";
import TodosPage from "./pages/TodosPage/TodosPage";
import Notification from "./components/Notification";

function App() {
  return (
    <div className={twMerge("font-display text-lg")}>
      <TodosPage />
      <Notification />
    </div>
  );
}

export default App;
