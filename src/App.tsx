import "./global.css";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

import { Empty } from "./Components/Empty";
import { Header } from "./Components/Header";
import { Info } from "./Components/Info";
import { InputNewTask } from "./Components/InputNewTask";
import { Task } from "./Components/Task";

export interface ITask {
  id: string;
  valueTask: string;
  isChecked?: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addNewTask(valueTask: string) {
    const newTask: ITask = {
      id: uuidv4(), 
      valueTask,
      isChecked: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  return (
    <div className="bg-[--gray-600] min-h-screen">
      <Header />
      <div className="w-1/2 m-auto mt-[-25px] flex flex-col gap-16">
        <InputNewTask onAddTask={addNewTask} />
        <div className="flex flex-col gap-6">
          <Info />
          {tasks.length === 0 ? (
            <Empty />
          ) : (
            tasks.map(({ id, valueTask, isChecked }) => (
              <Task key={id} id={id} valueTask={valueTask} isChecked={isChecked} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
