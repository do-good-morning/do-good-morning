import React, { useContext } from "react";
import { useHistory } from "react-router";
import { LoginOutlined } from "@ant-design/icons";
import "./css/Profile.css";
import MyPosting from "../components/groupCmp/MyPosting";
import { DoGoodMorningContext } from "../components/App";

const Profile = ({ userObj }) => {
  const history = useHistory();
  const { isLoggedIn } = useContext(DoGoodMorningContext);

  const data1 = {
    Nickname: userObj.userNickname,
    ImageUploadTime: "8:10",
    ImgUrl: "./images/example1.jpg",
    ImageCity: "Vancouver",
    ImageCountry: "Canada",
  };

  const data2 = {
    Nickname: userObj.userNickname,
    ImageUploadTime: "8:46",
    ImgUrl: "./images/example2.jpg",
    ImageCity: "Toronto",
    ImageCountry: "Canada",
  };

  const data3 = {
    Nickname: userObj.userNickname,
    ImageUploadTime: "9:12",
    ImgUrl: "./images/example3.jpg",
    ImageCity: "Toronto",
    ImageCountry: "Canada",
  };

  const data4 = {
    Nickname: userObj.userNickname,
    ImageUploadTime: "8:10",
    ImgUrl: "./images/example4.jpg",
    ImageCity: "Toronto",
    ImageCountry: "Canada",
  };

  const data5 = {
    Nickname: userObj.userNickname,
    ImageUploadTime: "7:23",
    ImgUrl: "./images/example5.jpg",
    ImageCity: "Toronto",
    ImageCountry: "Canada",
  };

  const data6 = {
    Nickname: userObj.userNickname,
    ImageUploadTime: "08:12",
    ImgUrl: "./images/example6.jpg",
    ImageCity: "Toronto",
    ImageCountry: "Canada",
  };

  const data7 = {
    Nickname: userObj.userNickname,
    ImageUploadTime: "6:52",
    ImgUrl: "./images/example7.jpg",
    ImageCity: "Toronto",
    ImageCountry: "Canada",
  };

  const data8 = {
    Nickname: userObj.userNickname,
    ImageUploadTime: "7:10",
    ImgUrl: "./images/example8.jpg",
    ImageCity: "Toronto",
    ImageCountry: "Canada",
  };

  const data9 = {
    Nickname: userObj.userNickname,
    ImageUploadTime: "8:00",
    ImgUrl: "./images/example9.jpg",
    ImageCity: "Toronto",
    ImageCountry: "Canada",
  };

  const data10 = {
    Nickname: userObj.userNickname,
    ImageUploadTime: "9:10",
    ImgUrl: "./images/example10.jpg",
    ImageCity: "Quebec",
    ImageCountry: "Canada",
  };

  return (
    <>
      <div className="profile-page">
        <div className="logo">
          <a href="/">
            <img
              src="./images/dgm-logo.png"
              alt="DoGoodMorning"
              style={{ width: 100 }}
            />
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
                <MyPosting data={data1} />
                <br />
                <MyPosting data={data2} />
              </li>
              <li className="group-line2">
                <MyPosting data={data3} />
                <br />
                <MyPosting data={data4} />
              </li>
              <li className="group-line3">
                <MyPosting data={data5} />
                <br />
                <MyPosting data={data6} />
              </li>
              <li className="group-line4">
                <MyPosting data={data7} />
                <br />
                <MyPosting data={data8} />
              </li>
              <li className="group-line5">
                <MyPosting data={data9} />
                <br />
                <MyPosting data={data10} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
