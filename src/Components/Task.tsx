import { Check, Trash2 } from "lucide-react";

export interface ITask {
  id: string;
  task: string;
  checked?: boolean;
}

export function Task({ task, checked }: ITask) {
  return (
    <div className="flex justify-between p-4 bg-[--gray-400] rounded-lg">
      {checked === true ? (
        <div className="flex gap-3 items-center">
          <Check className="text-white w-5 h-5 p-1 flex justify-center items-center rounded-full bg-[--purple-500] hover:bg-[--purple-400] transition-colors hover:cursor-pointer" />
          <p className="text-[--gray-300] line-through font-light">{task}</p>
        </div>
      ) : (
        <div className="flex gap-3 items-center">
          <div className="w-5 h-5 rounded-full border-solid border-2 border-[--blue-400] hover:opacity-70 hover:cursor-pointer" />
          <p className="text-white font-light">{task}</p>
        </div>
      )}

      <button>
        <Trash2
          size={16}
          className="text-[--gray-300] hover:text-[--red-500] transition-colors"
        />
      </button>
    </div>
  );
}
