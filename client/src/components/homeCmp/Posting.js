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

const Posting = ({ data }) => {
  if (data) {
    // console.log(data);
    const imageUrl = process.env.REACT_APP_API_URL + "/img/" + data.ImageData;
    // console.log(imageUrl);
    return (
      <>
        {/* 포스팅 카드 */}
        <div className="posting">
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
            <span className="info-name">{data.Nickname}님의 아침</span>
            <hr />
            <span>{data.ImageUploadTime} EST</span>
            <span>
              {data.ImageCity}, {data.ImageCountry}
            </span>
            <span>{data.ImageDescription}</span>
          </div>
        </div>
      </>
    );
  } else {
    console.log("hello");
    return (
      <>
        {/* 포스팅 카드 */}
        <div className="posting">
          {/* 포스팅 사진 */}
          <img src="" alt="sample" className="posting__photo" />
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
            <span>대한민국, 서울</span>
            <span>오늘하루도 힘차게</span>
          </div>
        </div>
        ;
      </>
    );
  }
};

export default Posting;
