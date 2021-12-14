import React from "react";
import { Box, Flex, Input, Textarea, Button } from "@chakra-ui/react";

const Write = () => {
  return (
    <Flex h="80vh" alignItems="stretch">
      <Box>
        <label htmlFor="img-upload">여기를 눌러 이미지를 등록하세요.</label>
      </Box>
      <Flex direction="column" h="100%" justifyContent="space-between">
        <Input id="img-upload" type="file" />
        <Textarea
          placeholder="사진에 대한 설명을 적어주세요."
          flex="1"
        ></Textarea>
        <Button>등록</Button>
      </Flex>
    </Flex>
  );
};

export default Write;
