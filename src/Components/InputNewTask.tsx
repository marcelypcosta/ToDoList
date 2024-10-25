import { PlusCircle } from "lucide-react";

export function InputNewTask() {

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 bg-[--gray-500] text-white p-4 rounded-md placeholder:text-[--gray-300] outline-none"
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button
        className="flex gap-2 items-center p-4 rounded-md bg-[--blue-500] text-white text-sm hover:bg-[--blue-400] transition-colors"
      >
        Criar <PlusCircle size={16} />
      </button>
    </div>
  );
}
