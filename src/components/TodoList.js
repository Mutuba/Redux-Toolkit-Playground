// src/features/todos/TodoList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todos/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            className="todo-item-text"
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </span>
          <button
            className="todo-item-btn"
            style={{ marginRight: 4 }}
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
