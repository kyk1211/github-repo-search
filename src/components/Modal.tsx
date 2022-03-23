import styled from "@emotion/styled";
import React, { useEffect } from "react";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function Modal({ show, setShow, children }: Props) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  if (!show) return null;

  return (
    <Container onClick={() => setShow(false)}>
      <Wrapper onClick={(e) => e.stopPropagation()}>{children}</Wrapper>
    </Container>
  );
}

const Container = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgb(166, 166, 166, 0.5)",
  zIndex: "999",
  position: "fixed",
  inset: "0",
});

const Wrapper = styled.div({
  backgroundColor: "#fff",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  padding: "10px",
});
