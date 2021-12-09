import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import List from "./components/posts/List";

function App() {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">
        <List />
      </Container>
    </>
  );
}

export default App;
