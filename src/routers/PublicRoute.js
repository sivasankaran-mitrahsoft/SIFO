import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = (props) => {
  // const { element: Component, path, ...rest } = props;

console.log("props",props);

  return (
    <React.Fragment>
      <Route path={props.path} element={props.element} />
    </React.Fragment>
  );
};

export default PublicRoute;