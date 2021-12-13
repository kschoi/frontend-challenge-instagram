import React from "react";
import { Grid } from "@chakra-ui/react";
import ListItem from "./ListItem";

const List = ({ data }) => {
  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)" gap={1}>
      {data.map((item) => (
        <ListItem
          key={item.id}
          title={item.comment}
          imageUrl={item.image_url}
        />
      ))}
    </Grid>
  );
};

export default List;
