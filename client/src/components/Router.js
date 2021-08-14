import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeTmp from "../pages/HomeTmp";
import Home from "../pages/Home";
import Map from "../pages/Map";
import Images from "../pages/Images";
import Rank from "../pages/Rank";
import Profile from "../pages/Profile";
import ImageUploadModal from "./imageUploadModal/ImageUpload";
import { DoGoodMorningContext } from "./App";

const AppRouter = () => {
  const { setIsLoggedIn } = useContext(DoGoodMorningContext);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    if (localStorage.jwt) {
      setIsLoggedIn(true);
      setUserObj({
        userNickname: localStorage.nickname,
        userEmail: localStorage.email,
      });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeTmp} />
        <Route exact path="/profile">
          <Profile userObj={userObj} />
        </Route>
        <Route exact path="/map" component={Map} />
        <Route exact path="/images" component={Images} />
        <Route exact path="/rank" component={Rank} />
        <Route exact path="/modal" component={ImageUploadModal} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
