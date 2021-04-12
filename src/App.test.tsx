import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import configureMockStore from "redux-mock-store";
import React from "react";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import App from "./App";
import { RootState } from "./store";

test("full app rendering/navigating", () => {
  const mockStore = configureMockStore();
  const store = mockStore<RootState>({
    session: {
      profile: undefined,
      token: undefined,
    },
    todos: [],
  });
  const history = createMemoryHistory();
  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText("No account yet?")).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText("No account yet?"), leftClick);
});
