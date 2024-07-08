// App.js
import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Todo App</h1>
      </div>
      <div className="content">
        <AddTodo />
        <TodoList />
      </div>
      <div className="footer">
        <p>© 2024 Todo App. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
