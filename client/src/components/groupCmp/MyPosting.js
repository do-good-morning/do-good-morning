import React from "react";
import { LikeOutlined } from "@ant-design/icons";
import "./css/SubPosting.css";

const MyPosting = ({ data }) => {
  if (data) {
    return (
      <>
        <div className="sub-posting">
          <img className="image-sm" src={data.ImgUrl} alt="sample" />
          <div className="sub-posting__info">
            <span>{data.ImageUploadTime} EST</span>
            <span>
              {data.ImageCity}, {data.ImageCountry}
            </span>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="sub-posting">
          <img className="imageSm" src="./images/sample.png" alt="sample" />
          <div className="sub-posting__info">
            <span>8:14AM EST</span>
            <span>윌리엄스버그, 뉴욕 미국</span>
          </div>
        </div>
      </>
    );
  }
};

export default MyPosting;
