import React, { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { SessionState, SET_SESSION } from "../store/session/types";
import Loading from "./Loading";

type Props = {
  component: React.ComponentType<any>; // component is required
} & RouteProps;

const PublicRoute = ({ component: Component, ...rest }: Props) => {
  const store = useStore<SessionState>();
  const dispatch = useDispatch();
  const state = store.getState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authString = window.localStorage.getItem("auth");
    if (authString) {
      // TODO: validate data
      const authData: SessionState = JSON.parse(authString);
      dispatch({
        type: SET_SESSION,
        payload: authData,
      });
    }
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
              state.token ? <Redirect to="/" /> : <Component {...routeProps} />
            }
          />
        )
      }
    </>
  );
};

export default PublicRoute;
