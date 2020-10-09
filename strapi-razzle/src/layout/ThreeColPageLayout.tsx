import React, { FunctionComponent } from "react";
import DefaultLayout from "./DefaultLayout";
import { IconButton, Button, Box, Image, Icon } from "@chakra-ui/core";

const productInfo = {
  id: "01",
  title: "Whitley",
  price: "19.99",
  rating: 4,
  imgSrc: "/static/img/products/glasses-01.jpg",
  description:
    "With a choice of colours you can be sure to find Whitley in a style that you love. Its minimalist design will compliment your style with ease. Lightweight and easy to wear with a comforting finish.",
};

const ThreeColPageLayout: FunctionComponent = ({ children }) => {
  return (
    <DefaultLayout>
      <Box display="flex" justifyContent="space-between">
        <Box></Box>
        <Box width="75%">{children}</Box>
        <Box></Box>
      </Box>
    </DefaultLayout>
  );
};

export default ThreeColPageLayout;
