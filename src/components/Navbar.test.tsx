import React from "react";
import { render, screen } from "@testing-library/react";

import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  test("renders Navbar component", () => {
    // NOTE: the Link component should not be used outside of a Router.
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // TODO: add assertions.
  });
});
