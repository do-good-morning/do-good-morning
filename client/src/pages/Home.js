/* REACT */
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

/* AXIOS */
import axios from "axios";

/* FULL PAGE */
import ReactFullpage from "@fullpage/react-fullpage";

/* ANT-DESIGN */
import {
  LoginOutlined,
  UserOutlined,
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
import PostingSection from "../components/homeCmp/PostingSection";
import GroupPostings from "../components/homeCmp/GroupPostings";
import Rank from "./Rank";
import Map from "./Map";
import { DoGoodMorningContext } from "../components/App";
import SubmitModal from "../components/homeCmp/SubmitModal";

/* CSS */
import "./css/Home.css";

SwiperCore.use([Navigation]);

const Home = () => {
  const history = useHistory();
  const { formState, setFormState } = useContext(DoGoodMorningContext);
  const [visible, setVisible] = useState(false);
  const [visibleSubmitModal, setVisibleSubmitModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  /* 로그인 상태 확인 */
  const { isLoggedIn } = useContext(DoGoodMorningContext);

  /* 로그인 state */
  const [emailSI, setEmailSI] = useState("");
  const [passwordSI, setPasswordSI] = useState("");

  /* 회원가입 state */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const api = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (formState === "loggedin") {
      setVisible(false);
    }
  }, [formState]);

  // SIGN 입력 핸들러
  const onChangeHandler = (event) => {
    console.log(event);
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      console.log(value);
      setEmail(value);
    } else if (name === "nickname") {
      setNickname(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "passwordCheck") {
      setPasswordCheck(value);
    } else if (name === "emailSI") {
      setEmailSI(value);
    } else if (name === "passwordSI") {
      setPasswordSI(value);
    }
  };

  // 로그인 버튼 핸들러
  const onSignInHandler = (event) => {
    console.log(`email${emailSI}`);
    console.log(`pwd${passwordSI}`);

    event.preventDefault();

    if (!emailSI || !passwordSI) {
      alert("로그인 폼을 입력해주세요");
    } else {
      axios
        .post(`${api}/sign-in`, {
          Email: emailSI,
          Password: passwordSI,
          withCredentials: true,
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("jwt", response.data.AccessToken);
            localStorage.setItem("nickname", response.data.Nickname);
            localStorage.setItem("email", response.data.Email);

            setNickname(response.data.Nickname);
            setFormState("loggedin");
            alert("로그인 성공!");

            window.location.replace("/");
          } else {
            alert("error");
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };

  // 회원가입 버튼 핸들러
  const onSignUpHandler = (event) => {
    event.preventDefault();

    if (!email || !nickname || !password || !passwordCheck) {
      alert("회원가입 폼을 입력해주세요");
    } else if (!password === passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
    } else if (password.length >= 8) {
      axios
        .post(`${api}/sign-up`, {
          Email: email,
          Nickname: nickname,
          Password: password,
          CheckPassword: passwordCheck,
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            setFormState("loggedin");
            alert("회원가입 성공!");
            localStorage.setItem("jwt", response.data.AccessToken);
            localStorage.setItem("nickname", response.data.Nickname);
            localStorage.setItem("email", response.data.Email);

            window.location.replace("/");
          } else {
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      alert("비밀번호는 8자이상, 숫자+영어 조합으로 입력해주세요.");
    }
  };

  /* 마이페이지 이동 핸들러 */
  const onMoveProfile = () => {
    alert("마이페이지 이동");
    history.push("/profile");
  };

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

  return (
    <>
      <div className="logo">
        <a href="/">
          <span>DoGoodMorning</span>
        </a>
      </div>
      <FullPage />
      <div className="sign-btn">
        {isLoggedIn ? (
          <>
            <span onClick={onMoveProfile}>
              <UserOutlined className="sign__icons" />
            </span>
          </>
        ) : (
          <>
            <span onClick={showModal}>
              <LoginOutlined className="sign__icons" />
            </span>
          </>
        )}
      </div>
      <div className="posting__submit">
        <button onClick={setVisibleSubmitModal}>
          당신의 아침을 공유해 주세요
        </button>
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
              className="signin__form"
            >
              <h2 className="signin__title">로그인</h2>
              <Form.Item
                label="이메일"
                name="emailSI"
                rules={[
                  {
                    required: true,
                    message: "이메일을 입력해주세요!",
                  },
                ]}
              >
                <Input
                  className="sign-input"
                  name="emailSI"
                  onChange={onChangeHandler}
                />
              </Form.Item>

              <Form.Item
                label="비밀번호"
                name="passwordSI"
                rules={[
                  {
                    required: true,
                    message: "패스워드를 입력해주세요!",
                  },
                ]}
              >
                <Input.Password
                  name="passwordSI"
                  className="sign-input"
                  onChange={onChangeHandler}
                />
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
                  onClick={(e) => {
                    console.log("로그인 버튼 클릭");
                    onSignInHandler(e);
                  }}
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
              className="signup__form"
            >
              <h2 className="signin__title">회원가입</h2>
              <Form.Item
                label="이메일"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "이메일을 입력해주세요!",
                  },
                ]}
              >
                <Input
                  name="email"
                  className="sign-input"
                  onChange={onChangeHandler}
                />
              </Form.Item>

              <Form.Item
                label="닉네임"
                name="nickname"
                rules={[
                  {
                    required: true,
                    message: "닉네임을 입력해주세요!",
                  },
                ]}
              >
                <Input
                  name="nickname"
                  className="sign-input"
                  onChange={onChangeHandler}
                />
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
                <Input.Password
                  name="password"
                  className="sign-input"
                  onChange={onChangeHandler}
                />
              </Form.Item>

              <Form.Item
                label="비밀번호 재확인"
                name="passwordCheck"
                rules={[
                  {
                    required: true,
                    message: "패스워드를 입력해주세요!",
                  },
                ]}
              >
                <Input.Password
                  name="passwordCheck"
                  className="sign-input"
                  onChange={onChangeHandler}
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 6,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  className="signup-btn-submit"
                  onClick={onSignUpHandler}
                >
                  회원가입
                </Button>
              </Form.Item>
            </Form>
          </SwiperSlide>
        </Swiper>
      </Modal>
      <SubmitModal
        visible={visibleSubmitModal}
        setVisible={setVisibleSubmitModal}
      />
    </>
  );
};

const FullPage = () => (
  <ReactFullpage
    licenseKey={"9FA666D8-21AD41DE-A43A3694-078F442A"}
    scrollingSpeed={900}
    render={({ state, fullpageApi }) => {
      return (
        <>
          <ReactFullpage.Wrapper>
            {/* SECTION 1 : 포스팅 섹션 */}
            <PostingSection
              moveSectionDown={() => fullpageApi.moveSectionDown()}
            />
            {/* SECTION 2 : 지도 섹션 */}
            <Map moveSectionDown={() => fullpageApi.moveSectionDown()} />
            {/* SECTION 3 : 포스팅 그룹 섹션 */}
            <GroupPostings />
            {/* SECTION 4 : 유저/나라 통계 섹션 */}
            <Rank />
          </ReactFullpage.Wrapper>
        </>
      );
    }}
  />
);

export default Home;
