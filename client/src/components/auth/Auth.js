import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { formState, setFormState } from "../App";
import { DoGoodMorningContext } from "../App";

function SignUp() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [blank, setBlank] = useState(false);
  const { formState, setFormState } = useContext(DoGoodMorningContext);
  const api =
    "http://ec2-3-35-206-232.ap-northeast-2.compute.amazonaws.com:5000";

  // (회원가입 폼) 입력 핸들러
  const onChangeHandler = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "nickname") {
      setNickname(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "passwordCheck") {
      setPasswordCheck(value);
    }
  };

  // 회원가입 버튼 핸들러
  const onSignUpHandler = (event) => {
    event.preventDefault();
    if (password.length >= 8 && password === passwordCheck) {
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
            setFormState("login");
            alert("회원가입 성공!");
            localStorage.setItem("jwt", response.data.AccessToken);
            localStorage.setItem("nickname", response.data.Nickname);
          } else {
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else alert("비밀번호는 8자이상, 숫자+영어 조합으로 입력해주세요.");
  };

  // 로그인 버튼 핸들러
  const onSignInHandler = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setBlank(true);
    } else {
      axios
        .post(`${api}/sign-in`, {
          Email: email,
          Password: password,
          withCredentials: true,
        })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            localStorage.setItem("jwt", response.data.AccessToken);
            localStorage.setItem("nickname", response.data.Nickname);
            setNickname(response.data.Nickname);
            setFormState("loggedin");
            alert("로그인 성공!");
          } else {
            alert("error");
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };

  const signInForm = (
    <>
      <form>
        <input
          type="email"
          value={email}
          name="email"
          onChange={onChangeHandler}
          placeholder="이메일을 입력해주세요"
        />
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChangeHandler}
          placeholder="비밀번호를 입력해주세요"
        />
        <div>
          <button onClick={onSignInHandler}>로그인</button>
          <span>아이디가 없으신가요?</span>
        </div>
      </form>
      <button onClick={() => setFormState("sign-up")}>회원가입</button>
    </>
  );

  const signUpForm = (
    <>
      <form>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
          placeholder="이메일을 입력해주세요."
        />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChangeHandler}
          placeholder="닉네임을 입력해주세요"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
          placeholder="비밀번호를 입력해주세요."
        />
        <input
          type="password"
          name="passwordCheck"
          value={passwordCheck}
          onChange={onChangeHandler}
          placeholder="비밀번호를 확인해주세요."
        />
        <button onClick={onSignUpHandler}>회원가입</button>
      </form>
      <button onClick={() => setFormState("login")}>로그인</button>
    </>
  );

  return <div>{formState === "login" ? signInForm : signUpForm}</div>;
}

export default SignUp;
