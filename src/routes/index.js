import { Routes, Route } from "react-router-dom";
import Posts from "../components/posts/Posts";
import Write from "../components/posts/Write";
import Signup from "../components/signup/Signup";
import Login from "../components/login/Login";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/write" element={<Write />} />
      <Route exact path="/" element={<Posts />} />
    </Routes>
  );
};
export default Router;
