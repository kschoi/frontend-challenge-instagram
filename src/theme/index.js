import { extendTheme } from "@chakra-ui/react";

const overrides = {
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        color: "gray.800",
        bg: "gray.50",
      },
    }),
  },
};

export default extendTheme(overrides);
