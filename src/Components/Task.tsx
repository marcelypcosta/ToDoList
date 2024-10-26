import { Check, Trash2 } from "lucide-react";
import type { ITask } from "../App";

interface ITaskProps extends ITask {
  onDelete: (id: string) => void;
}

export function Task({ id, valueTask, isChecked, onDelete }: ITaskProps) {
  function handleDeleteTask() {
    onDelete(id);
  }

  return (
    <div className="flex justify-between p-4 bg-gray-400 rounded-lg">
      {isChecked ? (
        <div className="flex gap-3 items-center">
          <Check className="text-white w-5 h-5 p-1 flex justify-center items-center rounded-full bg-purple-dark hover:bg-purple-light transition-colors hover:cursor-pointer" />
          <p className="text-gray-300 line-through font-light">{valueTask}</p>
        </div>
      ) : (
        <div className="flex gap-3 items-center">
          <div className="w-5 h-5 rounded-full border-solid border-2 border-b-blue-light hover:opacity-70 hover:cursor-pointer" />
          <p className=" text-white font-light">{valueTask}</p>
        </div>
      )}

      <button onClick={handleDeleteTask}>
        <Trash2
          size={16}
          className="text-gray-300 hover:text-red-danger transition-colors"
        />
      </button>
    </div>
  );
}
