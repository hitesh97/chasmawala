import React from "react";
import { IconButton, Button, Box, Image, Icon } from "@chakra-ui/core";
import { CurrencySymbol } from "../common/siteSettings";
import PrescriptionInfo from "../components/PrescriptionInfo";
import GuaranteeInfo from "../components/GuaranteeInfo";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./ProductDetails.css";

// import ItemsCarousel from 'react-items-carousel';

const productInfo = {
  id: "01",
  productCode: "Whitley-001",
  title: "Whitley",
  color: "Black",
  availableColors: ["black", "red", "green"],
  price: "19.99",
  rating: 4,
  imgSrc: "/static/img/products/glasses-01.jpg",
  images: [
    "/static/img/products/glasses-01.jpg",
    "/static/img/products/glasses-02.jpg",
    "/static/img/products/glasses-03.jpg",
    "/static/img/products/glasses-04.jpg",
  ],
  description:
    "With a choice of colours you can be sure to find Whitley in a style that you love. Its minimalist design will compliment your style with ease. Lightweight and easy to wear with a comforting finish.",
};

const ProductDetails = () => {
  const items = productInfo.images.map((tile, index) => (
    <Image
      key={`productImg-${index}`}
      src={tile}
      height="100%"
      width="Auto"
      rounded="lg"
    />
  ));
  return (
    <Box display="flex" justifyContent="space-between" minHeight="500px">
      <Box width="50%" padding="30px">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h5"
          lineHeight="tight"
          isTruncated
          margin="4px"
          fontSize="0.9rem"
        >
          {productInfo.productCode}
        </Box>

        {/* <Image src={productInfo.imgSrc} rounded="lg" /> */}
        <Box>
          <Carousel
            showArrows={false}
            renderThumbs={(children) =>
              children.map((child, index) => (
                <Box key={`thumb-${index}`} height="60px">
                  {child}
                </Box>
              ))
            }
          >
            {items}
          </Carousel>
        </Box>
      </Box>
      <Box width="50%" padding="30px">
        <Box
          mt="1"
          fontWeight="semibold"
          fontSize="1.5rem"
          lineHeight="tight"
          isTruncated
        >
          {productInfo.title}
        </Box>
        <Box marginTop="20px" marginBottom="20px">
          {productInfo.description}
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          fontSize="1.5rem"
          lineHeight="tight"
          isTruncated
        >
          {CurrencySymbol}
          {productInfo.price}
        </Box>
        <Box isTruncated>Color : {productInfo.color}</Box>
        <Box marginTop="20px">
          <Button variantColor="teal" variant="solid" size="lg">
            Add to basket
          </Button>
        </Box>

        <PrescriptionInfo />
        <GuaranteeInfo />
      </Box>
    </Box>
  );
};

export default ProductDetails;
