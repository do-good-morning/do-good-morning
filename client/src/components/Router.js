import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeTmp from "../pages/HomeTmp";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeTmp} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
