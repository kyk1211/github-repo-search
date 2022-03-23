import styled from "@emotion/styled";
import React from "react";

interface Props {
  isSuccess: boolean;
  msg: string;
}

export default function Toast({ isSuccess, msg }: Props) {
  return (
    <Container isSuccess={isSuccess}>
      <span style={{ zIndex: 999 }}>{msg}</span>
      <ProgressBar isSuccess={isSuccess} />
    </Container>
  );
}

interface StyleProps {
  isSuccess: boolean;
}

const Container = styled.div<StyleProps>`
  width: 15.625rem;
  height: 3.125rem;
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

  @keyframes In {
    from {
      transform: translate3d(-100%, 0, 0);
      opacity: 0;
    }
    to {
      transform: translateZ(0);
      opacity: 1;
    }
  }
  @keyframes Out {
    from {
      opacity: 0;
    }
    to {
      height: 0;
      opacity: 0;
      margin-bottom: 0;
    }
  }
  animation-fill-mode: forwards;
  animation-name: In, Out;
  animation-delay: 0s, 3s;
  animation-duration: 1s, 0.5s;
`;

const ProgressBar = styled.div<StyleProps>`
  width: 15.625rem;
  height: 5%;
  background-color: ${({ isSuccess }) => (isSuccess ? "#94D466" : "#FCDEE0")};
  position: absolute;
  left: 0;
  bottom: 0;
  @keyframes Progress {
    0% {
      width: 0;
    }
    90% {
      width: 15.625rem;
    }
  }

  animation: Progress 2.5s;
`;
