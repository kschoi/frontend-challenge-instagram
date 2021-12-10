import React, { useEffect } from "react";
import { Grid } from "@chakra-ui/react";
import ListItem from "./ListItem";
import { useSelector, useDispatch } from "react-redux";
import { postsAction } from "../../store/posts";

const List = () => {
  // useSelector로 store의 state를 가져옵니다.
  const { data, error, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsAction.getPosts());
  }, [dispatch]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생...</div>;
  if (!data) return null;

  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)">
      {data.map((item) => (
        <ListItem
          key={item.id}
          title={item.comment}
          imageUrl={item.image_url}
        />
      ))}
    </Grid>
  );
};

export default List;
