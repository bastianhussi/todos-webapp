import React from "react";
import { render, screen } from "@testing-library/react";

import NotFound from "./NotFound";

describe("NotFound", () => {
  test("renders NotFound page", () => {
    render(<NotFound />);
  });
});
