import React, { Component } from "react";
import { useStore } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { SessionState } from "../store/session/types";

type Props = {};

const PrivateRoute = (_props: Props) => {
  const store = useStore<SessionState>();
  const state = store.getState();
  return (
    <Route
      render={(routeProps) =>
        state.user ? <Component {...routeProps} /> : <Redirect to="/login" />
      }
    ></Route>
  );
};

export default PrivateRoute;
