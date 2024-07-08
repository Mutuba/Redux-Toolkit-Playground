// src/features/todos/todoSlice.test.js
import { describe, it, expect } from "vitest";
import todoReducer, { addTodo, toggleTodo, deleteTodo } from "./todoSlice";

describe("todoSlice", () => {
  it("should handle initial state", () => {
    expect(todoReducer(undefined, { type: "unknown" })).toEqual([]);
  });

  it("should handle addTodo", () => {
    const actual = todoReducer([], addTodo("Test Todo"));
    expect(actual.length).toBe(1);
    expect(actual[0].text).toBe("Test Todo");
  });

  it("should handle toggleTodo", () => {
    const state = [{ id: 1, text: "Test Todo", completed: false }];
    const actual = todoReducer(state, toggleTodo(1));
    expect(actual[0].completed).toBe(true);
  });

  it("should handle deleteTodo", () => {
    const state = [{ id: 1, text: "Test Todo", completed: false }];
    const actual = todoReducer(state, deleteTodo(1));
    expect(actual.length).toBe(0);
  });
});
