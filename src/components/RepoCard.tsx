import styled from "@emotion/styled";
import React, { useState } from "react";
import Modal from "./Modal";

interface Props {
  item: RepoItems;
  type?: "saved" | "searched";
  handleClick: (item: RepoItems) => void;
}

export default function RepoCard({ item, type, handleClick }: Props) {
  const [modal, setModal] = useState(false);

  if (type === "saved") {
    return (
      <>
        <Modal show={modal} setShow={setModal}>
          <ModalContent>
            <h3>이 레포지토리를 삭제하시겠습니까?</h3>
            <p>Repository: {item.full_name}</p>
            <div>
              <OkayBtn
                onClick={() => {
                  handleClick(item);
                  setModal(false);
                }}
              >
                삭제
              </OkayBtn>
              <CancelBtn onClick={() => setModal(false)}>취소</CancelBtn>
            </div>
          </ModalContent>
        </Modal>
        <SavedContainer>
          <img src={item.owner.avatar_url} alt="avatar" />
          <Wrapper>
            <h1>{item.full_name}</h1>
            <p>{item.description}</p>
            <p>created_at: {new Date(item.created_at).toLocaleDateString()}</p>
            <p>updated_at: {new Date(item.updated_at).toLocaleDateString()}</p>
          </Wrapper>
          <DelBtn
            onClick={(e) => {
              e.stopPropagation();
              setModal(true);
            }}
          >
            X
          </DelBtn>
        </SavedContainer>
      </>
    );
  }

  return (
    <>
      <Modal show={modal} setShow={setModal}>
        <ModalContent>
          <h3>이 레포지토리를 저장하시겠습니까?</h3>
          <p>Repository: {item.full_name}</p>
          <div>
            <OkayBtn
              onClick={() => {
                handleClick(item);
                setModal(false);
              }}
            >
              저장
            </OkayBtn>
            <CancelBtn onClick={() => setModal(false)}>취소</CancelBtn>
          </div>
        </ModalContent>
      </Modal>
      <Container onClick={() => setModal(true)}>
        <img src={item.owner.avatar_url} alt="avatar" />
        <Wrapper>
          <h1>{item.full_name}</h1>
          <p>{item.description}</p>
          <p>created_at: {new Date(item.created_at).toLocaleDateString()}</p>
          <p>updated_at: {new Date(item.updated_at).toLocaleDateString()}</p>
        </Wrapper>
      </Container>
    </>
  );
}

const ModalContent = styled.div({
  width: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  "& > div": {
    alignSelf: "flex-end",
    display: "flex",
    gap: "5px",
  },
});

const Button = styled.button({
  border: "none",
  backgroundColor: "none",
  color: "white",
  cursor: "pointer",
  padding: "5px 10px",
  borderRadius: "5px",
});

const OkayBtn = styled(Button)({
  backgroundColor: "#4CAF50",
});

const CancelBtn = styled(Button)({
  backgroundColor: "#f44336",
});

const DelBtn = styled(Button)({
  color: "black",
  fontWeight: "bold",
  width: "30px",
  alignSelf: "flex-start",

  "&:hover": {
    backgroundColor: "#DCDCDC",
  },
});

const Container = styled.div({
  backgroundColor: "#fff",
  minWidth: "680px",
  width: "calc(50% - 20px)",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  border: "1px solid black",
  transform: "scale(0.9)",
  transition: "transform 0.2s linear",
  padding: "10px",

  "& img": {
    width: "200px",
    height: "200px",
  },

  "&:hover": {
    transform: "scale(1)",
  },

  "@media screen and (max-width: 1400px)": {
    minWidth: "unset",
    width: "100%",
  },
});

const SavedContainer = styled.div({
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  border: "1px solid black",
  padding: "5px",

  "& img": {
    width: "50px",
  },
});

const Wrapper = styled.div({
  padding: "0 5px",
  flex: "1",
  minWidth: "0",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  userSelect: "none",

  "h1, p": {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
});
