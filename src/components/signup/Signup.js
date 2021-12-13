import React from "react";
import { Box, Button, Heading, Input, Grid } from "@chakra-ui/react";

const Signup = () => {
  return (
    <Box maxW="450px" mt={{ base: "20px", md: "100px" }} mx="auto">
      <Box bg="white" borderWidth="1px" p={5}>
        <Grid gap={5}>
          <Heading fontSize="3xl">Signup</Heading>
          <Input variant="flushed" type="text" placeholder="email" />
          <Input variant="flushed" type="text" placeholder="name" />
          <Input variant="flushed" type="text" placeholder="nickname" />
          <Input variant="flushed" type="password" placeholder="password" />
          <Button>join</Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default Signup;
