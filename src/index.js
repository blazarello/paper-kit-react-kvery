/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import AboutUsPage from "views/examples/AboutUs";
import PressPage from "views/examples/PressPage";
import GalleryPage from "views/examples/GalleryPage";
import ArticleWritePage from "views/examples/ArticleWritePage";
import AdminPage from "views/examples/Admin";
import LoginPage from "views/examples/LoginPage";
import StatPage from "views/examples/StatisticsPage";
// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/about-us-page"
        render={(props) => <AboutUsPage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/press-page"
        render={(props) => <PressPage {...props} />}
      />
      <Route
        path="/gallery-page"
        render={(props) => <GalleryPage {...props} />}
      />
       <Route
        path="/article-write-page"
        render={(props) => <ArticleWritePage {...props} />}
      />
      <Route
        path="/admin-page"
        render={(props) => <AdminPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/login-page"
        render={(props) => <LoginPage {...props} />}
      />
      <Route
        path="/stat-page"
        render={(props) => <StatPage {...props} />}
      />
      <Redirect to="/landing-page" />
    </Switch>
  </BrowserRouter>
);
