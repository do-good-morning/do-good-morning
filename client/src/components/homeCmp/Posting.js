import React from "react";
import {
  InfoCircleOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import "./css/Posting.css";

const Posting = () => {
  return (
    <>
      <div className="posting">
        <img
          src="./images/sample.png"
          alt="sample"
          className="posting__photo"
        />
        <div className="posting__side">
          <InfoCircleOutlined className="posting__icons" />
          <LikeOutlined className="posting__icons" />
          <ShareAltOutlined className="posting__icons" />
        </div>
        <div className="posting__info">
          <span className="info-name">김두굿님의 아침</span>
          <hr />
          <span>08:14AM EST</span>
          <span>뉴욕, 미국</span>
          <span>오늘 아침은 땅콩버터로-.</span>
        </div>
      </div>
    </>
  );
};

export default Posting;
