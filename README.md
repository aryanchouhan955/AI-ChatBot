# 🤖 AI Chatbot Web Application

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=netlify)](https://ai-chatbot-application1.netlify.app/)

A modern, responsive AI-powered chatbot web application built with **React**, **Vite**, and **Tailwind CSS**. It integrates with the **Google Gemini API** to provide an interactive, real-time chat experience featuring conversation history, a sleek dark mode UI, and a typewriter effect for AI responses.

### 🚀 [Try the Live Demo Here](https://ai-chatbot-application1.netlify.app/)

---

## ✨ Key Features
- **Smart AI Conversations:** Powered by the Google Gemini API (`gemini-1.5-flash`).
- **Context-Aware:** Remembers the conversation history for seamless multi-turn chats.
- **Multiple Chats:** Sidebar to manage and switch between different conversation threads.
- **Typewriter Effect:** Smooth, character-by-character text rendering for AI replies.
- **Markdown Support:** Renders bold text, tables, and code blocks beautifully using `react-markdown`.
- **Modern UI:** Sleek, responsive dark-themed interface built with Tailwind CSS.

---

## 🛠️ Technologies Used
- **Frontend Framework:** React 19 + Vite
- **Styling:** Tailwind CSS
- **AI Integration:** `@google/genai` (Gemini API)
- **Markdown Rendering:** `react-markdown` & `remark-gfm`
- **State Management:** React Hooks (`useState`, `useEffect`, custom hooks)

---

## ⚙️ How it Works
1. **User Input:** The user types a message and hits send.
2. **State Update:** The message is instantly added to the active conversation with a unique ID.
3. **API Call:** The entire conversation history is bundled and sent to the Gemini API to retain context.
4. **Response:** The UI displays a placeholder, and once the response is received, it streams in using a custom typewriter effect hook.
5. **Session Management:** Users can click "New Chat" to start a fresh thread without losing previous threads.

---

## 💻 Local Setup Instructions

Want to run this project locally? Follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/aryanchouhan955/AI-ChatBot.git
cd AI-ChatBot
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory and add your Google Gemini API key:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```
*(Get your free API key from [Google AI Studio](https://aistudio.google.com/))*

### 4. Run the development server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

---

## 📁 Project Structure

```text
src/
├── components/       # UI components (Sidebar, ChatHeader, ChatMessages, ChatInput)
├── hooks/            # Custom React hooks (e.g., useChatTyping)
├── utils/            # Helper functions (e.g., ID generation)
├── App.jsx           # Main application layout and state
├── BackEnd.js        # Gemini API initialization
├── typewriter.js     # Typewriter effect logic
└── main.jsx          # React entry point
```
