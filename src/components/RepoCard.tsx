import styled from "@emotion/styled";
import React from "react";

interface Props {
  item: ApiItems;
  handleClick?: () => void;
}

export default function RepoCard({ item }: Props) {
  return (
    <Container>
      <img src={item.owner.avatar_url} alt="" />
      <ListItem>{item.full_name}</ListItem>
      <ListItem>{item.created_at}</ListItem>
      <ListItem>{item.updated_at}</ListItem>
    </Container>
  );
}

const Container = styled.div({});
const ListItem = styled.div({});
