import styled from "@emotion/styled";
import React, { useState } from "react";
import Modal from "./Modal";

interface Props {
  item: ApiItems;
}

export default function RepoCard({ item }: Props) {
  const [modal, setModal] = useState(false);

  const handleSave = () => {
    const myRepo: ApiItems[] | null = JSON.parse(window.localStorage.getItem("repos") as string);
    if (myRepo !== null && myRepo.length < 4) {
      const data = myRepo.filter((value) => value.id !== item.id);
      data.push(item);
      window.localStorage.setItem("repos", JSON.stringify(data));
      setModal(false);
      return;
    }
    if (myRepo !== null && myRepo.length >= 4) {
      alert("저장은 최대 4개까지 입니다.");
      setModal(false);
      return;
    }
    if (myRepo === null) {
      const myRepo = [item];
      window.localStorage.setItem("repos", JSON.stringify(myRepo));
      setModal(false);
      return;
    }
  };

  return (
    <>
      <Modal show={modal} setShow={setModal}>
        <div>
          <p>이 레포지토리를 저장하시겠습니까?</p>
          <p>{item.full_name}</p>
          <div>
            <button onClick={handleSave}>저장</button>
            <button onClick={() => setModal(false)}>취소</button>
          </div>
        </div>
      </Modal>
      <Container onClick={() => setModal(true)}>
        <img src={item.owner.avatar_url} alt="" />
        <Wrapper>
          <h1>{item.full_name}</h1>
          <p>{item.description}</p>
          <p>created_at: {new Date(item.created_at).toLocaleString()}</p>
          <p>updated_at: {new Date(item.updated_at).toLocaleString()}</p>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div({
  minWidth: "700px",
  width: "calc(50% - 20px)",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  border: "1px solid black",
  transform: "scale(0.9)",
  transition: "all 0.2s linear",

  "& img": {
    width: "200px",
    height: "200px",
  },

  "&:hover": {
    transform: "scale(1)",
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
