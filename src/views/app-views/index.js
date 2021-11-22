import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

export const AppViews = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route path={`/home`} component={lazy(() => import(`./Home`))} />
        <Route path={`/profile`} component={lazy(() => import(`./Profile`))} />

        <Redirect from="/" to={`/Home`} />
      </Switch>
    </Suspense>
  );
};

export default AppViews;
