import { useState } from "react";
import ai from "./BackEnd";
import { genId } from "./utils/id";
import { useChatTyping } from "./hooks/useChatTyping";

import Sidebar from "./components/Sidebar";
import ChatHeader from "./components/ChatHeader";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";

export default function App() {
  
  const [conversations, setConversations] = useState([
    { id: genId(), title: "New Conversation", messages: [] },
  ]);
  const [activeId, setActiveId] = useState(conversations[0].id);
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const { typingMessageId, setTypingMessageId, setTypingText, typedText } =
    useChatTyping(setConversations);

  const active = conversations.find(c => c.id === activeId);

  const send = async () => {
    if (!query.trim() || loading) return;
    setLoading(true);

    const user = { id: genId(), role: "user", text: query };
    const aiMsg = { id: genId(), role: "ai", text: "", isTyping: true };

    setConversations(prev =>
      prev.map(c => {
        if (c.id !== activeId) return c;

        const isFirstMessage = c.messages.length === 0;

        return {
          ...c,
          title: isFirstMessage
            ? user.text.slice(0, 40) + (user.text.length > 40 ? "..." : "")
            : c.title,
          messages: [...c.messages, user, aiMsg],
        };
      })
    );


    setQuery("");

    try {
      const res = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: user.text,
      });
      setTypingMessageId(aiMsg.id);
      setTypingText(res.text ?? "No response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <Sidebar
        open={sidebarOpen}
        conversations={conversations}
        activeId={activeId}
        onSelect={setActiveId}
        onNewChat={() =>
          setConversations([{ id: genId(), title: "New Conversation", messages: [] }, ...conversations])
        }
      />

      <div className="flex-1 flex flex-col">
        <ChatHeader
          title={active.title}
          count={active.messages.length}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        <ChatMessages
          messages={active.messages}
          typedText={typedText}
          typingMessageId={typingMessageId}
        />

        <ChatInput
          value={query}
          onChange={setQuery}
          onSend={send}
          disabled={loading}
        />
      </div>
    </div>
  );
}
