import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import AppLayout from "../Layouts/app-layout";

export const Views = (props) => {
  return (
    <Switch>
      <Route path="/">
        <AppLayout />
      </Route>
    </Switch>
  );
};

export default Views;
