/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { signupOpenState } from "../atoms/signupAtom";
import axios from "axios";
import { useMutation } from "react-query";
const container = css`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: #00000099;
  width: 100%;
  height: 100%;
  padding-top: 0px;
`;
const signinContainer = css`
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 550px;
  background-color: white;
`;
const signinHeader = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  background-color: whitesmoke;
`;
const signinText = css`
  font-size: 40px;
  padding-top: 10px;
  padding-left: 40px;
`;
const signinButton = css`
  width: 30px;
  height: 30px;
  margin-top: 20px;
  margin-right: 20px;
  font-size: 25px;
  border: none;
  &:hover {
    background-color: white;
  }
  &:active {
    background-color: grey;
  }
`;
const signinMain = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  border-bottom: 1px solid #dbdbdb;
`;
const codeContainer = css`
  display: flex;
`;
const signinFooter = css`
  width: 100%;
  height: 10%;
`;
const Signup = () => {
  const [openSignup, setOpenSignup] = useRecoilState(signupOpenState);
  const [signinContents, setSignContents] = useState({ name: "", password: "", email: "" });
  const [code, setCode] = useState("");
  const [code2, setCode2] = useState(0);
  const [codeCheck, setCodeCheck] = useState(false);
  const inputText = (e) => {
    const { name, value } = e.target;
    setSignContents({ ...signinContents, [name]: value });
    console.log(signinContents);
  };
  const signupClick = () => {
    if (signinContents.name.length == 0) {
      alert("이름은 빈값이 될 수 없습니다.");
    } else if (signinContents.password.length == 0) {
      alert("비밀번호는 빈값이 될 수 없습니다.");
    } else {
      signup.mutate();
      setOpenSignup(false);
    }
  };
  const signup = useMutation(
    async () => {
      const response = await axios.post("http://localhost:8080/signup", signinContents, "");
      return response;
    },
    {
      onSuccess: (response) => {
        alert("회원가입이 완료되었습니다.");
      },
    }
  );
  const sendCodeClick = () => {
    sendCode.mutate();
  };
  const sendCode = useMutation(
    async () => {
      alert("인증코드를 전송중입니다 잠시만 기다려주세요");
      const response = await axios.post("http://localhost:8080/sendcode", signinContents, "");
      setCode(response.data.code);
      console.log(response.data.code);
      return response;
    },
    {
      onSuccess: (response) => {
        if (response.data.code != null) {
          alert("전송이 완료되었습니다.");
        }
      },
    }
  );

  const inputCode = (e) => {
    setCode2(e.target.value);
    console.log(code2);
  };
  const codeCheckClick = () => {
    if (code == code2) {
      alert("인증이 완료 되었습니다.");
      setCodeCheck(true);
    } else {
      alert("인증번호가 다릅니다.");
    }
  };
  return (
    <div css={container}>
      <div css={signinContainer}>
        <div css={signinHeader}>
          <div css={signinText}>회원가입</div>
          <button css={signinButton} onClick={() => setOpenSignup(false)}>
            X
          </button>
        </div>
        <div css={signinMain}>
          <div>이름</div>
          <input onChange={inputText} type="text" name="name"></input>
          <div>email</div>
          <div>
            <input onChange={inputText} type="email" name="email"></input>
            <button onClick={sendCodeClick}>전송</button>
          </div>
          <div>인증번호</div>
          <div css={codeContainer}>
            <input onChange={inputCode} type="text" name="code2"></input>
            <button onClick={codeCheckClick}>인증</button>
          </div>
          <div>password</div>
          <input onChange={inputText} type="password" name="password"></input>
          <button onClick={signupClick} disabled={!codeCheck}>
            만들기
          </button>
        </div>
        <div css={signinFooter}></div>
      </div>
    </div>
  );
};

export default Signup;
