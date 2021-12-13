import React, { useEffect } from "react";
import List from "./List";
import { useSelector, useDispatch } from "react-redux";
import { postsAction } from "../../store/posts";

const Posts = () => {
  // useSelector로 store의 state를 가져옵니다.
  const { data, error, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsAction.getPosts());
  }, [dispatch]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생...</div>;
  if (!data) return null;

  return <List data={data} />;
};

export default Posts;
