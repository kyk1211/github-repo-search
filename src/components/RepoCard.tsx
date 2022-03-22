import styled from "@emotion/styled";
import React, { useState } from "react";
import Modal from "./Modal";

interface Props {
  item: ApiItems;
}

export default function RepoCard({ item }: Props) {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(true);
  };

  return (
    <>
      <Modal show={modal} setShow={setModal}>
        <p>123</p>
      </Modal>
      <Container onClick={handleClick}>
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
