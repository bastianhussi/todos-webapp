import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { SessionState } from "../store/session/types";
import Loading from "./Loading";

type Props = {
  component: React.ComponentType<any>; // component is required
} & RouteProps;

const PublicRoute = ({ component: Component, ...rest }: Props) => {
  const [noAuth, setNoAuth] = useState(true);
  const store = useStore<SessionState>();
  const state = store.getState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setNoAuth(!state.user && !window.localStorage.getItem("auth"));
    setLoading(false);
  });

  return (
    <>
      {
        // Check if message failed
        loading ? (
          <Loading />
        ) : (
          <Route
            {...rest}
            render={(routeProps) => (noAuth ? <Component {...routeProps} /> : <Redirect to="/" />)}
          />
        )
      }
    </>
  );
};

export default PublicRoute;
