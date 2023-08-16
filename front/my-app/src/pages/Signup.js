/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { signupOpenState } from "../atoms/signupAtom";
import axios from "axios";
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
const signinFooter = css`
  width: 100%;
  height: 10%;
`;
const Signup = () => {
  const [openSignup, setOpenSignup] = useRecoilState(signupOpenState);
  const [signinContents, setSignContents] = useState({ name: "", password: "", email: "" });
  const inputText = (e) => {
    const { name, value } = e.target;
    setSignContents({ ...signinContents, [name]: value });
    console.log(signinContents);
  };
  const signupClick = async () => {
    const response = await axios.post("http://localhost:8080/signup", signinContents, "");
    return response;
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
          <input onChange={inputText} type="email" name="email"></input>
          <div>password</div>
          <input onChange={inputText} type="password" name="password"></input>
          <button onClick={signupClick}>만들기</button>
        </div>
        <div css={signinFooter}></div>
      </div>
    </div>
  );
};

export default Signup;
