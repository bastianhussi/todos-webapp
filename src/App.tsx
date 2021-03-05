import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Todos from "./pages/Todos";

/**
 * @return {JSX.Element} App Element
 */
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/register" component={Register} />
        <PrivateRoute path="/" component={Todos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
