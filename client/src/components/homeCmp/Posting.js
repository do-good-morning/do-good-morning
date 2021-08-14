/* REACT */
import React from "react";

/* ANT DESIGN */
import {
  InfoCircleOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

/* CSS */
import "./css/Posting.css";

const Posting = () => {
  return (
    <>
      {/* 포스팅 카드 */}
      <div className="posting">
        {/* 포스팅 사진 */}
        <img
          src="./images/sample.png"
          alt="sample"
          className="posting__photo"
        />
        {/* 포스팅 버튼 그룹 */}
        <div className="posting__side">
          <InfoCircleOutlined className="posting__icons" />
          <LikeOutlined className="posting__icons" />
          <ShareAltOutlined className="posting__icons" />
        </div>
        {/* 포스팅 정보 */}
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
