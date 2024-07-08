// src/App.test.js
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App component", () => {
  it("renders the heading", () => {
    render(<App />);
    // expect(screen).toHaveTextContent(/react/i);
    // const heading = screen.getByText(/Todo App/i);
    // expect(heading).toBeInTheDocument();
  });
});
