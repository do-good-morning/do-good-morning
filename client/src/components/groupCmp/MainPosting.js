import React from "react";
import { LikeOutlined, ShareAltOutlined } from "@ant-design/icons";
import "./css/MainPosting.css";

const MainPosting = () => {
  return (
    <>
      <div className="main-posting">
        <img src="./images/sample.png" alt="sample" />
        <div className="main-posting__title">
          <span>김두굿의 아침</span>
        </div>
        <div className="main-posting__info">
          <span>8:14AM EST</span>
          <span>윌리엄스버그, 뉴욕 미국</span>
        </div>
        <div className="main-posting__side">
          <LikeOutlined className="main-posting__icons" />
          <ShareAltOutlined className="main-posting__icons" />
        </div>
      </div>
    </>
  );
};

export default MainPosting;
