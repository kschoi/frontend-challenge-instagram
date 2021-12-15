import React from "react";
import { Box, Grid, Textarea, Button } from "@chakra-ui/react";

const Write = () => {
  return (
    <Grid h="450px" gridTemplateColumns="1fr 1fr" gap={4} mt={4}>
      <Box overflow="hidden" borderWidth="1px" borderRadius="md">
        <Box
          as="label"
          htmlFor="img-upload"
          d="block"
          h="full"
          bg="gray.100"
          color="gray.500"
          textAlign="center"
          lineHeight="448px"
        >
          여기를 눌러 이미지를 등록하세요.
        </Box>
      </Box>
      <Grid h="full" gridTemplateRows="auto 1fr auto" gap={4}>
        <input id="img-upload" type="file" />
        <Textarea
          placeholder="사진에 대한 설명을 적어주세요."
          h="auto"
          resize="none"
        ></Textarea>
        <Button colorScheme="red">등록</Button>
      </Grid>
    </Grid>
  );
};

export default Write;
