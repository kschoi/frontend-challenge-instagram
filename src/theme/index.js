import { extendTheme } from "@chakra-ui/react";

const variantOutlined = () => ({
  field: {
    _focus: {
      boxShadow: "none",
    },
  },
});

const variantFilled = () => ({
  field: {
    _focus: {
      boxShadow: "none",
    },
  },
});

const variantFlushed = () => ({
  field: {
    _focus: {
      boxShadow: "none",
    },
  },
});

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
  shadows: {
    outline: "0 0 0 3px black",
  },
  components: {
    Input: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed,
      },
    },
    Select: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed,
      },
    },
    Textarea: {
      variants: {
        outline: () => variantOutlined().field,
        filled: () => variantFilled().field,
        flushed: () => variantFlushed().field,
      },
    },
  },
};

export default extendTheme(overrides);
