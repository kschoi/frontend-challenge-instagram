import React from "react";
import { Button, Flex, IconButton, Avatar } from "@chakra-ui/react";
import { SearchIcon, EditIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavbarMenu = () => {
  const isLogin = useSelector((state) => state.users.isLogin);
  const navigate = useNavigate();

  if (!isLogin) {
    return (
      <Flex alignItems="center">
        <Button
          onClick={() => navigate("/login")}
          size="sm"
          colorScheme="red"
          textDecoration="none !important"
        >
          로그인
        </Button>
      </Flex>
    );
  }

  return (
    <Flex alignItems="center">
      <IconButton
        aria-label="검색하기"
        icon={<SearchIcon boxSize={6} />}
        variant="unstyled"
      />
      <IconButton
        onClick={() => navigate("/write")}
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
