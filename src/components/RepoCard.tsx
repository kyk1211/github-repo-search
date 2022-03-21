import React from "react";

interface Props {
  item: ApiItems;
}

export default function RepoCard({ item }: Props) {
  return (
    <div>
      <p>{item.full_name}</p>
      <p>{item.created_at}</p>
      <p>{item.updated_at}</p>
    </div>
  );
}
