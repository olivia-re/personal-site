import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    brand: [
      "#F0F0F0", // index 0: lightest shade
      "#E0E0E0",
      "#D0D0D0",
      "#B0B0B0",
      "#909090",
      "#707070",
      "#505050",
      "#303030",
      "#101010",
      "#000000", // index 9: darkest shade
    ],
  },
  primaryColor: "brand",
});