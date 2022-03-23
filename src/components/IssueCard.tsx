import styled from "@emotion/styled";
import React from "react";

interface Props {
  item: IssueItems;
}

export default function IssueCard({ item }: Props) {
  return (
    <List>
      <A href={item.html_url} target="_blank" rel="noreferrer">
        <UserInfo>
          <Avatar src={item.user.avatar_url} alt="avatar" />
          <p>{item.user.login}</p>
        </UserInfo>
        <Desc>
          <h2>{item.title}</h2>
          <p>state: {item.state}</p>
          <p>created_at: {new Date(item.created_at).toLocaleDateString()}</p>
          <p>updated_at: {new Date(item.updated_at).toLocaleDateString()}</p>
        </Desc>
      </A>
    </List>
  );
}

const List = styled.li({
  display: "flex",
  border: "1px solid black",
  padding: "5px",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  width: "100%",
  userSelect: "none",
});

const A = styled.a({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  textDecoration: "none",
  color: "unset",
});

const UserInfo = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "150px",
  alignItems: "center",
  p: {
    minHeight: "20px",
  },
});

const Avatar = styled.img({
  width: "100%",
});

const Desc = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});
