/* REACT */
import React from "react";

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
  return (
    <>
      <div className="section posting-section">
        {/* 포스팅 SWIPER */}
        <Swiper navigation={true} className="mySwiper">
          <SwiperSlide>
            <Posting />
          </SwiperSlide>
          <SwiperSlide>
            <Posting />
          </SwiperSlide>
          <SwiperSlide>
            <Posting />
          </SwiperSlide>
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
