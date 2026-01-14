import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useTypewriter } from "./typewriter";
import ai from "./BackEnd";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const typedAnswer = useTypewriter(answer, 12);

  const ask_query = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: query,
      });

      // official SDK returns text here
      const reply = response.text ?? "";
      setAnswer(reply);

    } catch (err) {
      console.error("Gemini API error:", err);
      setAnswer("Something broke. Probably not your fault.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-5 h-screen bg-zinc-900 text-zinc-100">

      {/* Sidebar */}
      <aside className="col-span-1 bg-zinc-800 p-4 border-r border-zinc-700">
        <h2 className="font-semibold mb-4">History</h2>
        <p className="text-sm text-zinc-400">
          (You can add chat history here later.)
        </p>
      </aside>

      {/* Chat Screen */}
      <main className="col-span-4 flex flex-col">

        {/* Header */}
        <header className="bg-zinc-800 px-6 py-4 border-b border-zinc-700 font-semibold">
          AI Chatbot
        </header>

        {/* Conversation */}
        <div className="flex-1 overflow-y-auto px-6 py-4 bg-zinc-900">
          {loading && (
            <p className="text-sm text-zinc-400">Thinking…</p>
          )}

          {typedAnswer && (
            <div className="max-w-3xl bg-zinc-800 rounded-xl p-5 mt-4 leading-relaxed">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="text-xl font-bold mt-4 mb-2" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-lg font-semibold mt-4 mb-2" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-base font-semibold mt-3 mb-1" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="text-sm mb-3" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="ml-5 list-disc text-sm mb-1" {...props} />
                  ),
                }}
              >
                {typedAnswer}
              </ReactMarkdown>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="border-t border-zinc-700 p-4 bg-zinc-900">
          <div className="flex bg-zinc-800 rounded-xl overflow-hidden max-w-3xl mx-auto">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything…"
              className="flex-1 bg-transparent px-4 py-3 outline-none text-sm"
              onKeyDown={(e) => e.key === "Enter" && ask_query()}
            />
            <button
              onClick={ask_query}
              className="px-4 bg-zinc-700 hover:bg-zinc-600 transition text-sm"
            >
              Ask
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
