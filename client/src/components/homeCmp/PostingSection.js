import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { LoginOutlined, UserOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import Posting from "./Posting";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "antd/dist/antd.css";

SwiperCore.use([Navigation]);

const PostingSection = ({ moveSectionDown }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="section posting-section">
        <div className="logo">
          <a href="/">
            <span>DoGoodMorning</span>
          </a>
        </div>
        <div className="sign-btn">
          <span onClick={showModal}>
            <LoginOutlined className="sign__icons" />
          </span>
          {/* <UserOutlined className="sign__icons" /> */}
        </div>
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
        <div className="scroll-btn">
          <button onClick={moveSectionDown}>
            <img src="./images/scroll_icon.png" alt="Scroll" />
          </button>
        </div>
        <div className="posting__submit">
          <button>당신의 아침을 공유해 주세요</button>
        </div>
        <Modal
          title="로그인"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </>
  );
};

export default PostingSection;
