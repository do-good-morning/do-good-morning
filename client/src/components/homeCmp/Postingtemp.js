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

const Postingtemp = (data) => {
  const imageUrl = `${process.env.REACT_APP_API_URL}/img/` + data.ImageCity;
  console.log(imageUrl);
  return (
    <>
      {/* 포스팅 카드 */}
      <div className="posting" id={data.ImageId}>
        {/* 포스팅 사진 */}
        <img src={imageUrl} alt="sample" className="posting__photo" />
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
          <span>{data.ImageUploadTime} AM EST</span>
          <span>
            {data.ImageCountry} {data.ImageCity}
          </span>
          <span>{data.ImageDescription}</span>
        </div>
      </div>
    </>
  );
};

export default Posting;
