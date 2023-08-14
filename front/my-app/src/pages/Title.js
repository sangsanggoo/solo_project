/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { CgPassword } from "react-icons/cg";
import { useMutation, useQuery } from "react-query";
const Container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: white;
  margin: 50px;
`;

const mainContainer = css`
  display: flex;
  flex-direction: column;

  border: 1px solid #dbdbdb;
  height: 1000px;
  width: 1400px;
`;
const ContainerHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  height: 200px;
  width: 100%;
  font-size: 70px;
`;
const Containerbody = css`
  display: flex;
  min-height: 1000px;
  height: auto;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
`;
const sideContainer = css`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 800px;
  border-right: 1px solid #dbdbdb;
`;
const loginContainer = css`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
`;
const inputContainer = css`
  display: flex;
  align-items: center;
  padding-left: 20px;
`;
const loginIcon = css`
  height: 40px;
  width: 40px;
`;
const passwordIcon = css`
  height: 40px;
  width: 40px;
`;
const loginInput = css`
  height: 30px;
  width: 260px;
  margin: 15px 20px;
`;
const loginButtonContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 300px;
`;
const loginButton = css`
  height: 50px;
  width: 180px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  &:hover {
    background-color: #dbdbdb;
  }
  &:active {
    background-color: #fafafa;
  }
`;
const mainContents = css`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Containerfooter = css`
  display: flex;
  height: 200px;
  width: 100%;
`;
const footContents = css`
  display: flex;
  height: 100%;
`;
const Title = () => {
  const [loginInputContents, setloginInputContents] = useState({ id: "", password: "" });
  const loginChangeHandle = (e) => {
    const { name, value } = e.target;
    setloginInputContents({ ...loginInputContents, [name]: value });
    console.log(loginInputContents);
  };
  const loginClick = async () => {
    const option = {
      params: loginInputContents,
    };
    const response = await axios.get("http://localhost:8080/test", option);
    return response;
  };

  return (
    <div>
      <div css={Container}>
        <div css={mainContainer}>
          <div css={ContainerHeader}>상구네 카페</div>
          <div css={Containerbody}>
            <div css={sideContainer}>
              <div css={loginContainer}>
                <div css={inputContainer}>
                  <BsPersonCircle css={loginIcon} />
                  <input
                    css={loginInput}
                    type="text"
                    name="id"
                    onChange={loginChangeHandle}
                    placeholder="아이디 입력"
                  ></input>
                </div>
                <div css={inputContainer}>
                  <CgPassword css={passwordIcon} />
                  <input
                    css={loginInput}
                    type="password"
                    onChange={loginChangeHandle}
                    name="password"
                    placeholder="비밀번호 입력"
                  ></input>
                </div>
                <div css={loginButtonContainer}>
                  <button css={loginButton} onClick={loginClick}>
                    박지민
                  </button>
                </div>
              </div>
            </div>
            <div css={mainContents}>글 보이는곳</div>
          </div>
          <div css={Containerfooter}>
            <div css={footContents}>블로그 밑에</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
