import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatMessages({ messages, typedText, typingMessageId }) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {messages.map(msg => {
        const isAI = msg.role === "ai";
        const display =
          msg.isTyping && msg.id === typingMessageId
            ? typedText
            : msg.text;

        return (
          <div key={msg.id} className={`flex ${isAI ? "justify-start" : "justify-end"}`}>
            <div className={`max-w-[70%] p-3 rounded-xl ${
              isAI ? "bg-gray-800 border border-gray-700" : "bg-blue-600"
            }`}>
              {isAI ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {display}
                </ReactMarkdown>
              ) : (
                display
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
