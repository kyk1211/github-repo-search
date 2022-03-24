import styled from "@emotion/styled";
import React from "react";

interface Props {
  item: IssueItems;
  name?: string;
}

export default function IssueCard({ item, name }: Props) {
  return (
    <List>
      <A href={item.html_url} target="_blank" rel="noreferrer">
        <UserInfo>
          <Avatar src={item.user.avatar_url} alt="avatar" />
          <p>{item.user.login}</p>
        </UserInfo>
        <Desc>
          {name && <h3>Repo: {name}</h3>}
          <h3>
            Issue: {item.title} <Num>#{item.number}</Num>
          </h3>
          <p>state: {item.state}</p>
          <p>created_at: {new Date(item.created_at).toLocaleDateString()}</p>
          <p>updated_at: {new Date(item.updated_at).toLocaleDateString()}</p>
          {item.closed_at && <p>closed_at: {new Date(item.closed_at).toLocaleDateString()}</p>}
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
  flex: "1",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  textDecoration: "none",
  color: "unset",
});

const Num = styled.span({
  color: "gray",
});

const UserInfo = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: {
    minHeight: "20px",
  },
});

const Avatar = styled.img({
  width: "150px",
  border: "1px solid black",
});

const Desc = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});
