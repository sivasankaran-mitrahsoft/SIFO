import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = (props) => {
  const { component: Component, path, ...rest } = props;
  const shouldRender = props.computedMatch.path === path;

  if (!shouldRender) return null;

  return (
    <React.Fragment>
      <Route {...rest} element={Component} />
    </React.Fragment>
  );
};

export default PublicRoute;