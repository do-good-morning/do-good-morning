import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Map from "../pages/Map";
import ImageUploadModal from "./imageUploadModal/ImageUpload";
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/modal" component={ImageUploadModal} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
