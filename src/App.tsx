import { Empty } from "./Components/Empty";
import { Header } from "./Components/Header";
import { Info } from "./Components/Info";
import { NewTask } from "./Components/NewTask";
import { Task, type ITask } from "./Components/Task";
import "./global.css";

const Tasks: ITask[] = [];

function App() {
  return (
    <div className="bg-[--gray-600] min-h-screen">
      <Header />
      <div className="w-1/2 m-auto mt-[-25px] flex flex-col gap-16">
        <NewTask />
        <div className="flex flex-col gap-6">
          <Info />
          {Tasks.length === 0 ? (
            <Empty />
          ) : (
            Tasks.map(({ id, task, checked }) => (
              <Task key={id} id={id} task={task} checked={checked} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
