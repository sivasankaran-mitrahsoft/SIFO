import React from "react";
import { Navigate, Route } from "react-router-dom";
import Header from "../views/common/Header";

const PrivateRoute = (props) => {
  const { component: Component, path, ...rest } = props;
  const shouldRender = props.computedMatch.path === path;
  let authData = localStorage.getItem()
  authData = JSON.parse(authData)
  if (authData === null || Object.keys(authData)?.length === 0) {
    const queryParameters = new URLSearchParams(window.location.search)
    // console.log("added2323", queryParameters);
    // const type = queryParameters.get("type")
    // const docId = queryParameters.get("docId")
    // const email = queryParameters.get("emid")
    // var object = { "type": type, "docId": docId, "email": email}
    // console.log("object1234", object);
    // localStorage.setItem("RedirectLogout", JSON.stringify(object))
    return <Navigate to={"/"} />
  }
  if (!shouldRender) return null;
  // const headerRestrictRoutes = ['/store-preview', '/affiliate-dashboard', '/store-online']

  return (
    <React.Fragment>
      {/* {headerRestrictRoutes.includes(window.location.pathname) ? <div className="Test d-none d-md-block"><Header /></div> : <Header />} */}
      <Header />
      <Route {...rest} component={Component} />
    </React.Fragment>
  );
};

export default PrivateRoute;
