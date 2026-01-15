import { MenuIcon } from "./Icons";

export default function ChatHeader({ title, count, onToggle }) {
  return (
    <header className="flex items-center gap-3 p-4 border-b border-gray-800">
      <button onClick={onToggle}>
        <MenuIcon />
      </button>
      <div>
        <h1 className="font-semibold">{title}</h1>
        <p className="text-xs text-gray-400">{count} messages</p>
      </div>
    </header>
  );
}
