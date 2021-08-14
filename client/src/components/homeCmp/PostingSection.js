import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ANT-DESIGN */
import { LoginOutlined } from "@ant-design/icons";
import { Modal, Form, Input, Button } from "antd";
import "antd/dist/antd.css";

/* SWIPER */
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

/* COMPONENTS */
import Posting from "./Posting";

import "./css/PostingSection.css";

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
            <h1 className="signin__title">로그인</h1>
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
              <Input />
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
              <Input.Password />
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

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 5,
                span: 16,
              }}
              className="signin-btns-group"
            >
              {/* <Checkbox>이메일 저장하기</Checkbox> */}
              <Link to="/" className="signin-btns">
                아이디 찾기
              </Link>
              <span className="bar">|</span>
              <Link to="/" className="signin-btns">
                비밀번호 찾기
              </Link>
              <span className="bar">|</span>
              <Link to="/" className="signin-btns">
                회원가입
              </Link>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default PostingSection;
