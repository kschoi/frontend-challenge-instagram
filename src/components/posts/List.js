import React from "react";
import { Grid } from "@chakra-ui/react";
import ListItem from "./ListItem";

const mock = [
  {
    id: 1,
    title: "우리 예쁜 고양이",
    thumbnailUrl: "http://placekitten.com/200/300",
  },
  {
    id: 2,
    title: "귀염둥이",
    thumbnailUrl: "http://placekitten.com/300/300",
  },
];

const List = ({ data = mock }) => {
  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)">
      {data.map((item) => (
        <ListItem
          key={item.id}
          title={item.title}
          imageUrl={item.thumbnailUrl}
        />
      ))}
    </Grid>
  );
};

export default List;
