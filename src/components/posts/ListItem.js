import { AspectRatio, Box, Text } from "@chakra-ui/react";
import React from "react";

const ListItem = ({ title, imageUrl }) => {
  return (
    <Box
      pos="relative"
      transition="opacity 0.2s"
      opacity="1"
      _hover={{
        opacity: "0.9",
      }}
    >
      <AspectRatio ratio={1}>
        <img src={imageUrl} alt="" />
      </AspectRatio>
      <Text pos="absolute" bottom="0" left="0" p="10px" color="white">
        {title}
      </Text>
    </Box>
  );
};

export default ListItem;
