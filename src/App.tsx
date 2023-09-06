import { twMerge } from "tailwind-merge";
import TodosPage from "./pages/TodosPage/TodosPage";

function App() {
  return (
    <div className={twMerge("font-display text-lg")}>
      <TodosPage />
    </div>
  );
}

export default App;
