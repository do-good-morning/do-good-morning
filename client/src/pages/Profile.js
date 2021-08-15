import React, { useContext } from "react";
import { useHistory } from "react-router";
import { LoginOutlined } from "@ant-design/icons";
import "./css/Profile.css";
import SubPosting from "../components/groupCmp/SubPosting";
import { DoGoodMorningContext } from "../components/App";

const Profile = ({ userObj }) => {
  const history = useHistory();
  const { isLoggedIn } = useContext(DoGoodMorningContext);

  return (
    <>
      <div className="profile-page">
        <div className="logo">
          <a href="/">
            <span>DoGoodMorning</span>
          </a>
        </div>
        <div className="sign-btn">
          <LoginOutlined
            className="sign__icons"
            onClick={() => {
              localStorage.clear();
              history.push("/");
              window.location.reload();
            }}
          />
        </div>
        <div className="userInfo-group">
          <div className="userInfo">
            <h2>{userObj.userNickname}의 아침 기록들</h2>
          </div>
          <div className="user-postings">
            <ul>
              <li className="group-line1">
                <SubPosting />
                <br />
                <SubPosting />
              </li>
              <li className="group-line2">
                <SubPosting />
                <br />
                <SubPosting />
              </li>
              <li className="group-line3">
                <SubPosting />
                <br />
                <SubPosting />
              </li>
              <li className="group-line4">
                <SubPosting />
                <br />
                <SubPosting />
              </li>
              <li className="group-line5">
                <SubPosting />
                <br />
                <SubPosting />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
