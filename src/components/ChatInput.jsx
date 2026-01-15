import { SendIcon } from "./Icons";
import { useRef, useEffect } from "react";

export default function ChatInput({ value, onChange, onSend, disabled }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.height = "auto";
    ref.current.style.height = ref.current.scrollHeight + "px";
  }, [value]);

  return (
    <div className="p-4 border-t border-gray-800 flex gap-3 items-end">
      <textarea
        ref={ref}
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSend();
          }
        }}
        rows={1}
        className="flex-1 bg-gray-800 border border-gray-700 rounded-xl p-3 resize-none"
        placeholder="Ask your query..."
      />

      <button
        onClick={onSend}
        disabled={disabled}
        className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center disabled:opacity-50"
      >
        <SendIcon />
      </button>
    </div>
  );
}
