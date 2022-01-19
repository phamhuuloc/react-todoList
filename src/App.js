import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
