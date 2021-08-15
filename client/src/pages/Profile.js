import React from "react";
import "./css/Profile.css";

const Profile = ({ userObj }) => {
  return (
    <div>
      <div className="logo">
        <a href="/">
          <span>DoGoodMorning</span>
        </a>
      </div>
      <div className="profile">
        <span>{userObj.userNickname}</span>
        <span>{userObj.userEmail}</span>
      </div>
    </div>
  );
};

export default Profile;
