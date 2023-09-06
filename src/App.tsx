import { twMerge } from "tailwind-merge";
import Header from "./components/Header";
import Group from "./components/Group";

function App() {
  return (
    <div className={twMerge("font-display text-lg")}>
      <Header />
      <main className="px-36 py-3">
        <Group title="To do" />
        <Group title="Done" />
      </main>
    </div>
  );
}

export default App;
