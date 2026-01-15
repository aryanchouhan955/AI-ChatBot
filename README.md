# 🧠 AI Chatbot Web Application

## 📌 Project Description

This project is a **modern AI-powered chatbot web application** built using **React** and integrated with the **Gemini API**.  
It provides an interactive chat experience similar to ChatGPT, featuring real-time responses, conversation history, and a clean dark-themed user interface.

The application is designed with a **modular architecture**, ensuring scalability, maintainability, and stability while avoiding common React issues such as message disappearance and incorrect re-renders.

---

## 🎯 Objectives of the Project

The primary objectives of this project are:

- To build a **real-world AI chatbot interface**
- To learn and apply **best practices in React development**
- To implement **clean state management** for dynamic chat data
- To design a **modular and extensible frontend architecture**
- To prevent UI bugs caused by unstable keys and shared state

---

## 🧩 Key Features

- 💬 AI-powered conversations using Gemini API  
- 🗂️ Sidebar with conversation history  
- ✍️ Typewriter-style chatbot replies  
- 🌙 Dark theme UI  
- 📱 Responsive layout  
- 🧠 Stable message identity using unique IDs  
- 🧩 Modular components and reusable hooks  

---

## 🛠️ Technologies Used

- **Frontend:** React (Functional Components & Hooks)
- **Styling:** Tailwind CSS
- **AI Integration:** Gemini Software Development Kit API 
- **State Management:** React `useState`, custom hooks
- **Markdown Rendering:** `react-markdown` with `remark-gfm`
---



## 🧠 How the Application Works

1. User sends a message through the input field  
2. The message is added to the active conversation with a unique ID  
3. An AI placeholder message is created  
4. The Gemini API generates a response  
5. The response is displayed using a typewriter effect  
6. The conversation history is updated in the sidebar  

Each message is tracked using **stable unique identifiers**, preventing React from reusing incorrect DOM elements.

---

## 📁 Project Structure
#### src/
#### ├─ components/ # UI components (Sidebar, ChatHeader, ChatMessages, ChatInput)
#### ├─ hooks/ # Custom hooks (typing logic)
#### ├─ utils/ # Utility functions (ID generation)
#### ├─ App.jsx # Main application logic
#### ├─ App.css # Global styles
#### └─ main.jsx # Entry point

