import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    "html, body": {
      backgroundColor: "gray.900",
      color: "gray.100",
      fontFamily: "Inter, sans-serif",
      lineHeight: "1.6",
      minHeight: "100vh",
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
