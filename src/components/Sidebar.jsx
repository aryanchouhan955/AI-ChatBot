import { PlusIcon } from "./Icons";

export default function Sidebar({
  open,
  conversations,
  activeId,
  onSelect,
  onNewChat,
}) {
  return (
    <aside className={`${open ? "w-72" : "w-0"} bg-gray-900 border-r border-gray-800 transition-all overflow-hidden`}>
      <div className="p-4 border-b border-gray-800">
        <button
          onClick={onNewChat}
          className="w-full bg-blue-600 rounded-xl p-3 flex items-center justify-center gap-2"
        >
          <PlusIcon /> New Chat
        </button>
      </div>

      <div className="p-2 overflow-y-auto">
        {conversations.map(c => (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            className={`w-full text-left p-3 rounded mb-1 ${
              c.id === activeId ? "bg-gray-800" : "hover:bg-gray-800/50"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>
    </aside>
  );
}
