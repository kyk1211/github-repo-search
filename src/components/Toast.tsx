import styled from "@emotion/styled";
import React from "react";

interface Props {
  isSuccess: boolean;
  msg: string;
}

export default function Toast({ isSuccess, msg }: Props) {
  return (
    <Container isSuccess={isSuccess}>
      <span>{msg}</span>
      <ProgressBar isSuccess={isSuccess} />
    </Container>
  );
}

interface StyleProps {
  isSuccess: boolean;
}

const Container = styled.div<StyleProps>`
  zindex: 999;
  width: 250px;
  height: 50px;
  background-color: ${({ isSuccess }) => (isSuccess ? "#61A72F" : "#EB2431")};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @keyframes fadeIn {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    40% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      line-height: 0;
      height: 0;
      opacity: 0;
      margin-bottom: 0;
    }
  }
  animation-fill-mode: forwards;
  animation-name: fadeIn, fadeOut;
  animation-delay: 0s, 2s;
  animation-duration: 2s, 1s;
`;

const ProgressBar = styled.div<StyleProps>`
  width: 100%;
  height: 5%;
  background-color: ${({ isSuccess }) => (isSuccess ? "#94D466" : "#FCDEE0")};
  position: absolute;
  left: 0;
  bottom: 0;
  @keyframes Progress {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  animation: Progress 2s;
`;
