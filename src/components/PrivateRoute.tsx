import React, { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { RootState } from "../store";
import { SessionState, CHANGE_SESSION } from "../store/session/types";
import Loading from "./Loading";

type Props = {
  component: React.ComponentType<any>; // component is required
} & RouteProps;

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  const store = useStore<RootState>();
  const dispatch = useDispatch();
  const state = store.getState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authString = window.localStorage.getItem("auth");
    if (authString) {
      try {
        const authData: SessionState = JSON.parse(authString);
        dispatch({
          type: CHANGE_SESSION,
          payload: authData,
        });
      } catch (err) {
        window.localStorage.removeItem("auth");
        console.error(err);
      }
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
              state.session.token ? <Component {...routeProps} /> : <Redirect to="/login" />
            }
          />
        )
      }
    </>
  );
};

export default PrivateRoute;
