/* REACT */
import React, { useState, useEffect } from "react";

/* AXIOS */
import axios from "axios";

/* SWIPER */
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

/* COMPONENTS */
import Posting from "./Posting";

/* CSS */
import "./css/PostingSection.css";

SwiperCore.use([Navigation]);

const PostingSection = ({ moveSectionDown }) => {
  const [imageList, setImageList] = useState([]);
  const [swipingImageList, setSwipingImageList] = useState([]);
  const api = process.env.REACT_APP_API_URL;

  // 포스팅 섹션
  useEffect(() => {
    (async function GetPostingImages() {
      axios.get(`${api}/landing`).then((response) => {
        setImageList(response.data.images);
        console.log(response.data.images);
      });

      return;
    })();
  }, []);

  useEffect(() => {
    if (imageList.length) {
      setSwipingImageList(
        imageList.map((data) => (
          <div>
            <SwiperSlide>
              <Posting data={data} />
            </SwiperSlide>
          </div>
        ))
      );
    } else {
      setSwipingImageList(<div></div>);
    }
  }, [imageList]);

  return (
    <>
      <div className="section posting-section">
        {/* 포스팅 SWIPER */}
        <Swiper navigation={true} className="mySwiper">
          {swipingImageList}
        </Swiper>
        {/* 스크롤 버튼 */}
        <div className="scroll-btn">
          <button onClick={moveSectionDown}>
            <img src="./images/scroll_icon.png" alt="Scroll" />
          </button>
        </div>
      </div>
    </>
  );
};

export default PostingSection;
