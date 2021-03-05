import React from "react";
import { useStore } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { SessionState } from "../store/session/types";

type Props = {
  component: React.ComponentType<any>; // component is required
} & RouteProps;

const PublicRoute = ({ component: Component, ...rest }: Props) => {
  const store = useStore<SessionState>();
  const state = store.getState();
  return (
    <Route
      {...rest}
      render={(routeProps) => (state.user ? <Redirect to="/" /> : <Component {...routeProps} />)}
    />
  );
};

export default PublicRoute;
