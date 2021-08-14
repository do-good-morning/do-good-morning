import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("");

  useEffect(() => {
    const check = localStorage.jwt ? true : false;
    setIsLoggedIn(check);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} isLoggedIn={isLoggedIn} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
