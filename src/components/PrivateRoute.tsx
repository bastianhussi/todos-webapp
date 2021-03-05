import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { SessionState } from "../store/session/types";
import Loading from "./Loading";

type Props = {
  component: React.ComponentType<any>; // component is required
} & RouteProps;

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  const store = useStore<SessionState>();
  const state = store.getState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.localStorage.getItem("auth");
    // setLoading(false);
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
            render={(routeProps) =>
              state.user ? <Component {...routeProps} /> : <Redirect to="/login" />
            }
          />
        )
      }
    </>
  );
};

export default PrivateRoute;
