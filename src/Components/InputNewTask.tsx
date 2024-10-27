import { PlusCircle } from "lucide-react";
import { useState, type ChangeEvent } from "react";

interface IAddNewTask {
  onAddTask: (taskText: string) => void;
}

export function InputNewTask({ onAddTask }: IAddNewTask) {
  const [valueNewTask, setValueNewTask] = useState<string>("");

  function handleChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setValueNewTask(event.target.value);
  }

  function handleCreateNewTask() {
    if (valueNewTask === "") return;
    onAddTask(valueNewTask);
    setValueNewTask("");
  }

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 bg-gray-500 text-white p-4 rounded-md placeholder:text-gray-300 outline-none"
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={valueNewTask}
        onChange={handleChangeTask}
      />
      <button
        onClick={handleCreateNewTask}
        className="flex gap-2 items-center p-4 rounded-md bg-blue-dark text-white text-sm hover:bg-blue-light transition-colors"
      >
        Criar <PlusCircle size={16} />
      </button>
    </div>
  );
}
