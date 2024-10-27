import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

import { Info } from "./Components/Info";
import { Task } from "./Components/Task";
import { Empty } from "./Components/Empty";
import { Header } from "./Components/Header";
import { InputNewTask } from "./Components/InputNewTask";

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

    setTasks((tasksList) => [...tasksList, newTask]);
  }

  function deleteTask(id: string) {
    const updateTaskList = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(updateTaskList);
  }

  function toggleTask(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: !task.isChecked };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isChecked).length;

  return (
    <div className="bg-gray-600 min-h-screen">
      <Header />
      <div className="w-1/2 m-auto mt-[-25px] flex flex-col gap-16">
        <InputNewTask onAddTask={addNewTask} />
        <div className="flex flex-col gap-6">
          <Info totalTasks={totalTasks} completedTasks={completedTasks} />
          {tasks.length === 0 ? (
            <Empty />
          ) : (
            tasks.map(({ id, valueTask, isChecked }) => (
              <Task
                key={id}
                id={id}
                valueTask={valueTask}
                isChecked={isChecked}
                onDelete={deleteTask}
                onToggle={toggleTask}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
