import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Grid,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { usersAction } from "../../store/users";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(usersAction.getUsers(data));
  };

  return (
    <Box maxW="400px" mt={{ base: "20px", md: "100px" }} mx="auto">
      <Box bg="white" borderWidth="1px" p={5}>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <Grid gap={5}>
            <Heading fontSize="3xl">Login</Heading>
            <Input
              variant="flushed"
              type="email"
              placeholder="email"
              errorBorderColor="crimson"
              {...register("email", { required: true })}
              isInvalid={errors.email?.type === "required"}
            />
            {errors.email?.type === "required" && (
              <Text color="crimson" my="-10px">
                에러메시지 예시입니다.
              </Text>
            )}
            <Input
              variant="flushed"
              type="password"
              placeholder="password"
              errorBorderColor="crimson"
              {...register("password")}
            />
            <Button type="submit" colorScheme="red">
              Login
            </Button>
          </Grid>
        </form>
      </Box>
      <Flex mt="10px" justifyContent="center">
        <Text as="span" fontSize="sm" color="gray.500">
          계정이 없으신가요?
        </Text>
        <a href="/signup">
          <Text
            as="span"
            ml={2}
            fontSize="sm"
            color="gray.500"
            textDecoration="underline"
          >
            회원가입
          </Text>
        </a>
      </Flex>
    </Box>
  );
};

export default Login;
