import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./app/Navbar";
import Login from "./Login";
import Register from "./Register";
import Todos from "./Todos";

/**
 * @return {JSX.Element} App Element
 */
function App(): JSX.Element {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/" component={Todos} />
          <Route
            exact
            path="/about"
            render={() => (
              <section>
                <h2>About us</h2>
              </section>
            )}
          />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
