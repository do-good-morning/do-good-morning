/* REACT */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* ANT-DESIGN */
import {
  LoginOutlined,
  MailOutlined,
  UserOutlined,
  LockOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { Modal, Form, Input, Button } from "antd";
import "antd/dist/antd.css";

/* SWIPER */
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

/* COMPONENTS */
import Posting from "./Posting";

/* CSS */
import "./css/PostingSection.css";
// import "components/controller/controller.min.css";

SwiperCore.use([Navigation]);

const PostingSection = ({ moveSectionDown }) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  /* MODAL 핸들러 */
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="section posting-section">
        {/* 두굿모닝 로고 */}
        <div className="logo">
          <a href="/">
            <span>DoGoodMorning</span>
          </a>
        </div>

        {/* 로그인 버튼 */}
        <div className="sign-btn">
          <span onClick={showModal}>
            <LoginOutlined className="sign__icons" />
          </span>
          {/* <UserOutlined className="sign__icons" /> */}
        </div>

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
        <div className="posting__submit">
          <button>당신의 아침을 공유해 주세요</button>
        </div>

        {/* 로그인 폼 모달 */}
        <Modal
          visible={visible}
          okText="로그인"
          onOk={handleOk}
          confirmLoading={confirmLoading}
          cancelText="취소"
          onCancel={handleCancel}
          bodyStyle={{
            width: 520,
            fontFamily: "NanumSquareRound",
          }}
          style={{
            marginTop: 150,
            border: "none",
          }}
          footer={null}
        >
          <Swiper className="mySwiper">
            <SwiperSlide>
              {/* 로그인 폼 */}
              <Form
                name="basic"
                labelCol={{
                  span: 5,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="signin__form"
              >
                <h2 className="signin__title">로그인</h2>
                <Form.Item
                  label="이메일"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "이메일을 입력해주세요!",
                    },
                  ]}
                >
                  <Input className="sign-input" />
                </Form.Item>

                <Form.Item
                  label="비밀번호"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "패스워드를 입력해주세요!",
                    },
                  ]}
                >
                  <Input.Password className="sign-input" />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 5,
                    span: 16,
                  }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="signin-btn-submit"
                  >
                    로그인
                  </Button>
                </Form.Item>

                <span className="signin-info">
                  회원가입 시 옆으로 슬라이드
                  <RightCircleOutlined className="signin-arrow" />
                </span>
              </Form>
            </SwiperSlide>
            {/* 회원가입 폼 */}
            <SwiperSlide>
              <Form
                name="basic"
                labelCol={{
                  span: 6,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="signup__form"
              >
                <h2 className="signin__title">회원가입</h2>
                <Form.Item
                  label="이메일"
                  name="email_signup"
                  rules={[
                    {
                      required: true,
                      message: "이메일을 입력해주세요!",
                    },
                  ]}
                >
                  <Input className="sign-input" />
                </Form.Item>

                <Form.Item
                  label="닉네임"
                  name="nickName_signup"
                  rules={[
                    {
                      required: true,
                      message: "닉네임을 입력해주세요!",
                    },
                  ]}
                >
                  <Input className="sign-input" />
                </Form.Item>

                <Form.Item
                  label="비밀번호"
                  name="password_signup"
                  rules={[
                    {
                      required: true,
                      message: "패스워드를 입력해주세요!",
                    },
                  ]}
                >
                  <Input.Password className="sign-input" />
                </Form.Item>

                <Form.Item
                  label="비밀번호 재확인"
                  name="passwordCheck_signup"
                  rules={[
                    {
                      required: true,
                      message: "패스워드를 입력해주세요!",
                    },
                  ]}
                >
                  <Input.Password className="sign-input" />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 6,
                    span: 16,
                  }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="signup-btn-submit"
                  >
                    회원가입
                  </Button>
                </Form.Item>
              </Form>
            </SwiperSlide>
          </Swiper>
        </Modal>
      </div>
    </>
  );
};

export default PostingSection;
