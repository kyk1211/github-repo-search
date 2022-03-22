import styled from "@emotion/styled";
import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Modal from "./Modal";

interface Props {
  item: ApiItems;
  type?: "saved" | "searched";
  handleClick: (item: ApiItems) => void;
}

export default function RepoCard({ item, type, handleClick }: Props) {
  const [modal, setModal] = useState(false);
  const [repos, setRepos] = useLocalStorage<ApiItems[]>("repos");

  const handleSave = () => {
    if (repos !== null && repos.length < 4) {
      if (repos.filter((value) => value.id !== item.id).length !== repos.length) {
        alert("이미 저장되었습니다.");
      } else {
        const data = [...repos];
        data.push(item);
        setRepos(data);
        alert("저장 성공");
      }
    }
    if (repos !== null && repos.length >= 4) {
      alert("저장은 최대 4개까지 입니다.");
    }
    if (repos === null) {
      const myRepo = [item];
      setRepos(myRepo);
    }
    setModal(false);
  };

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
        <Container onClick={() => setModal(true)}>
          <img src={item.owner.avatar_url} alt="" />
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
        <img src={item.owner.avatar_url} alt="" />
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

const Container = styled.div({
  minWidth: "680px",
  width: "calc(50% - 20px)",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  border: "1px solid black",
  transform: "scale(0.9)",
  transition: "transform 0.2s linear",

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
