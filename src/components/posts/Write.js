import React, { useState } from "react";
import { Box, Grid, Textarea, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Write = () => {
  const { register, handleSubmit, formState } = useForm();
  const [thumbnail, setThumbnail] = useState("");

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("thumbnail", data.thumbnail[0]);

    axios({
      method: "post",
      url: "http://localhost:4000/uploads",
      config: {
        "content-type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => {
        setThumbnail(`/${res.data.image_url}`);
      })
      .catch((e) => console.error(e));
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <Grid h="450px" gridTemplateColumns="1fr 1fr" gap={4} mt={4}>
        <Box overflow="hidden" borderWidth="1px" borderRadius="md">
          {thumbnail ? (
            <img src={thumbnail} alt="" />
          ) : (
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
          )}
        </Box>
        <Grid h="full" gridTemplateRows="auto 1fr auto" gap={4}>
          <input id="img-upload" type="file" {...register("thumbnail")} />
          <Textarea
            placeholder="사진에 대한 설명을 적어주세요."
            h="auto"
            resize="none"
            {...register("comment")}
          ></Textarea>
          <Button colorScheme="red" type="submit">
            등록
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Write;
