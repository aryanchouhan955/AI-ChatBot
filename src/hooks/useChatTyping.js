import { useEffect, useState } from "react";
import { useTypewriter } from "../typewriter";

export function useChatTyping(setConversations) {
  const [typingText, setTypingText] = useState("");
  const [typingMessageId, setTypingMessageId] = useState(null);

  const typedText = useTypewriter(typingText, 20);

  useEffect(() => {
    if (!typingMessageId) return;
    if (typedText !== typingText) return;

    setConversations(prev =>
        prev.map(conv => {
            if (!conv.messages.some(m => m.id === typingMessageId)) {
            return conv; // do NOT touch unrelated conversations
            }

            return {
            ...conv,
            messages: conv.messages.map(m =>
                m.id === typingMessageId
                ? { ...m, text: typedText, isTyping: false }
                : m
            ),
            };
        })
    );


    setTypingMessageId(null);
    setTypingText("");
  }, [typedText, typingText, typingMessageId, setConversations]);

  return {
    typingMessageId,
    setTypingMessageId,
    setTypingText,
    typedText,
  };
}
