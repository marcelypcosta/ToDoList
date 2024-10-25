import { Empty } from "./Components/Empty";
import { Header } from "./Components/Header";
import { Info } from "./Components/Info";
import { InputNewTask } from "./Components/InputNewTask";
import { Task, type ITask } from "./Components/Task";
import "./global.css";

const Tasks: ITask[] = [];

function App() {
  return (
    <div className="bg-[--gray-600] min-h-screen">
      <Header />
      <div className="w-1/2 m-auto mt-[-25px] flex flex-col gap-16">
        <InputNewTask />
        <div className="flex flex-col gap-6 border-solid border-b-2 border-[--gray-400]">
          <Info />
          {Tasks.length === 0 ? (
            <Empty />
          ) : (
            Tasks.map(({ id, task, isChecked }) => (
              <Task key={id} id={id} task={task} isChecked={isChecked} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
