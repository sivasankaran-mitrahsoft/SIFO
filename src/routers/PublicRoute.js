import React from "react";
import { Route, Routes } from "react-router-dom";

const PublicRoute = ({ element, path }) => {
  return ( <Routes>
    <Route path={path} element={element} />
  </Routes>
  )
};

export default PublicRoute;