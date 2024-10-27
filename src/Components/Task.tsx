import { Check, Trash2 } from "lucide-react";

import type { ITask } from "../App";

interface ITaskProps extends ITask {
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export function Task({
  id,
  valueTask,
  isChecked,
  onDelete,
  onToggle,
}: ITaskProps) {
  function handleDeleteTask() {
    onDelete(id);
  }

  function toggleTask() {
    onToggle(id);
  }

  return (
    <div className="flex justify-between p-4 bg-gray-400 rounded-lg">
      <button onClick={toggleTask} className="flex gap-3 items-center">
        {isChecked ? (
          <>
            <Check className="text-white w-5 h-5 p-1 flex justify-center items-center rounded-full bg-purple-dark hover:bg-purple-light transition-colors hover:cursor-pointer" />
            <p className="text-gray-300 line-through font-light">{valueTask}</p>
          </>
        ) : (
          <>
            <div className="w-5 h-5 rounded-full border-solid border-2 border-blue-light hover:opacity-70 hover:cursor-pointer" />
            <p className=" text-white font-light">{valueTask}</p>
          </>
        )}
      </button>

      <button onClick={handleDeleteTask}>
        <Trash2
          size={16}
          className="text-gray-300 hover:text-red-danger transition-colors"
        />
      </button>
    </div>
  );
}
