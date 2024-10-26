import { ClipboardList } from "lucide-react";

export function Empty() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 px-6 border-solid border-t-2 border-gray-400">
      <ClipboardList size={64} className="text-gray-300" />
      <div className="flex flex-col items-center">
        <strong className="font-bold text-gray-300">
          Você ainda não tem atividades cadastradas
        </strong>
        <span className="text-gray-300">
          Crie tarefas e organize itens a fazer
        </span>
      </div>
    </div>
  );
}
