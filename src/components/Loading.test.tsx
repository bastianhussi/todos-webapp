import React from "react";
import { render, screen } from "@testing-library/react";

import Loading from "./Loading";

describe("Loading", () => {
  test("renders Loading screen", () => {
    render(<Loading />);
    expect(screen.getByText("Please stand by")).toBeInTheDocument();
  });
});
