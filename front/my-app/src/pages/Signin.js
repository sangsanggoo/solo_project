/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
const signinContainer = css`
  position: fixed;
  z-index: 999;
  background-color: #00000099;
  width: 100%;
  height: 100%;
  padding-top: 0px;
`;
const Signin = () => {
  return <div css={signinContainer}></div>;
};

export default Signin;
