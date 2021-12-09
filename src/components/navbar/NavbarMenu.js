import React from "react";
import { Flex, IconButton, Avatar } from "@chakra-ui/react";
import { SearchIcon, EditIcon } from "@chakra-ui/icons";

const NavbarMenu = () => {
  return (
    <Flex data-login="true" alignItems="center">
      <IconButton
        aria-label="검색하기"
        icon={<SearchIcon boxSize={6} />}
        variant="unstyled"
      />
      <IconButton
        aria-label="게시글 작성하기"
        icon={<EditIcon boxSize={6} />}
        variant="unstyled"
      />
      <a href="/">
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" size="sm" />
      </a>
    </Flex>
  );
};

export default NavbarMenu;
