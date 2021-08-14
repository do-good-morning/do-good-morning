import React from "react";
import { LikeOutlined } from "@ant-design/icons";
import "./css/SubPosting.css";

const SubPosting = () => {
  return (
    <>
      <div className="sub-posting">
        <img src="./images/sample.png" alt="sample" />
        <div className="sub-posting__title">
          <span>김두굿의 아침</span>
        </div>
        <div className="sub-posting__info">
          <span>8:14AM EST</span>
          <span>윌리엄스버그, 뉴욕 미국</span>
        </div>
        <div className="sub-posting__side">
          <LikeOutlined className="sub-posting__icons" />
        </div>
      </div>
    </>
  );
};

export default SubPosting;
