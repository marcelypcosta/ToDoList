export function Info() {
  return (
    <div className="flex justify-between items-end">
      <div className="flex items-center gap-2">
        <p className="text-blue-light text-sm font-semibold">Tarefas criadas</p>
        <span className="bg-gray-400 text-white text-xs px-2 py-1 rounded-xl">
          0
        </span>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-purple-light text-sm font-semibold">Concluídas</p>
        <span className="bg-gray-400 text-white text-xs px-2 py-1 rounded-xl">
          0
        </span>
      </div>
    </div>
  );
}
