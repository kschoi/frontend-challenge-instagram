import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import Router from "./routes";

function App() {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">
        <Router />
      </Container>
    </>
  );
}

export default App;
