import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <Box
      as="nav"
      pos="sticky"
      zIndex="sticky"
      top="0"
      left="0"
      w="100%"
      borderBottomWidth="1px"
      bg="white"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW="1024px"
        h="64px"
        mx="auto"
        px="20px"
      >
        <a href="/">
          <Flex justifyContent="space-between">
            <img
              src="/assets/images/Instagram_logo.png"
              alt="instagram"
              width="32px"
              height="32px"
            />
            <Text fontWeight="bold" ml="5px">
              Instagram
            </Text>
          </Flex>
        </a>
        <NavbarMenu />
      </Flex>
    </Box>
  );
};

export default Navbar;
