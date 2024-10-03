import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import * as view from '../views';

const AppRouter = () => {
    console.log("route")
    return (
        // <Router basename="/">
        //     <Routes>
        //     <Route exact={true} path={"/login"} name="Login"  component={view.Login}/>
        //         {/* <PublicRoute exact={true} path={"/"} component={view.Login} /> */}
        //         {/* <PrivateRoute exact={true} path={"/campaign-invites"} component={view.Home} />
        //         <PrivateRoute exact={true} path={"/account-authentication"} component={view.AccountLink} />
        //         <PublicRoute exact={true} path={"/"} component={view.LinkAccountNew} />
        //         <PrivateRoute exact={true} path={"/dashboards"} component={view.Dashboard} />
        //         <PrivateRoute exact={true} path={"/social-performance"} component={view.SocialPerformance} />
        //         <PublicRoute exact={true} path={"/media-kit/:id"} component={view.socialPerformanceReport} />

        //         <Route exact path="/entity" name="Entity" component={view.EntityList} /> */}
        //         {/* <PublicRoute exact={true} path={"/link-account-new"} component={view.LinkAccountNew} /> */}

        //         {/* Sprint 4 Routers */}
        //         {/* <PublicRoute exact={true} path={"/creator-form"} component={view.publicCreatorForm} />
        //         <PublicRoute exact={true} path={"/creator-landing"} component={view.CreatorLandingPage} /> */}
        //     </Routes>
        // </Router>
        <Router basename="/">
            <Routes>
                <Route path={'/'} element={<view.Login />} />
                <Route path="/forgotpassword" element={<view.ForgotPassword />} />
                <Route path="/changepassword" element={<view.ChangePassword />} />
                <Route path="/resetpassword" element={<view.ResetPassword />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;