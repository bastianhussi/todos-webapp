import React from "react";
import { render, screen } from "@testing-library/react";

import About from "./About";
import { BrowserRouter } from "react-router-dom";

describe("About", () => {
  test("renders About page", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    expect(screen.queryByText("About us")).toBeInTheDocument();
  });
});
