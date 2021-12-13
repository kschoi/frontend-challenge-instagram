import React from "react";
import { Box, Button, Heading, Input, Grid, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { usersAction } from "../../store/users";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { data, error, loading } = useSelector((state) => state.users.userData);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(usersAction.addUsers(data));
  };

  if (data) {
    return <Navigate to="/login" />;
  }

  return (
    <Box maxW="450px" mt={{ base: "20px", md: "100px" }} mx="auto">
      <Box bg="white" borderWidth="1px" p={5}>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <Grid gap={5}>
            <Heading fontSize="3xl">Signup</Heading>
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
              type="text"
              placeholder="name"
              errorBorderColor="crimson"
              {...register("name")}
            />
            <Input
              variant="flushed"
              type="text"
              placeholder="nickname"
              errorBorderColor="crimson"
              {...register("nickname")}
            />
            <Input
              variant="flushed"
              type="password"
              placeholder="password"
              errorBorderColor="crimson"
              {...register("password")}
            />
            <Button type="submit" colorScheme="red">
              join
            </Button>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
