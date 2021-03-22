import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Todos from "./pages/Todos";

/**
 * @return {JSX.Element} App Element
 */
function App(): JSX.Element {
  // NOTE: exact is required for the root-route to work. If its not provided this route will match everything.
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Todos} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/register" component={Register} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
