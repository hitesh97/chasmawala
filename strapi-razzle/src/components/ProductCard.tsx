import React from "react";
import ReactStars from "react-rating-stars-component";

import { IconButton, Button, Box, Image, Icon } from "@chakra-ui/core";
import { FaHeart } from "react-icons/fa";

import "./ProductCard.css";
import { CurrencySymbol } from "../common/siteSettings";

const ProductCard = ({
  id,
  title,
  price,
  rating,
  imgSrc,
  imgAlt,
  descPara,
}: {
  id: string;
  title: string;
  price: string;
  rating: number;
  imgSrc: string;
  imgAlt: string;
  descPara: string;
}) => {
  return (
    <div className="col col--4 product-card">
      <Box borderWidth="1px" rounded="lg" overflow="hidden">
        <Image className="product-card-img" src={imgSrc} alt={imgAlt} />
        <Box
          paddingLeft="10px"
          paddingRight="10px"
          paddingBottom="10px"
          marginTop="40px"
          marginBottom="20px"
        >
          <div className="product-title">{title}</div>
          <div className="price-container">
            <div className="price-left">
              <ReactStars
                isHalf={true}
                value={rating}
                a11y={true}
                size={25}
                edit={false}
              />
            </div>
            <div className="price-right">
              {CurrencySymbol}
              {price}
            </div>
          </div>
          <div className="product-actions-container">
            <div className="product-actions-left">
              <Button
                leftIcon="info"
                variantColor="teal"
                variant="solid"
                size="xs"
              >
                Detail
              </Button>
              <IconButton
                variantColor="teal"
                aria-label="add to wish list"
                size="xs"
                icon={FaHeart}
                marginLeft="6px"
              />
            </div>
            <div className="product-actions-right">
              <Button variantColor="teal" variant="solid" size="xs">
                Add to cart
              </Button>
              {/* 
              <Icon name="star" />
              <MdSettings size="32px" color="green" /> */}
            </div>
          </div>
          {/* <Box
            mt="1"
            fontWeight="semibold"
            as="p"
            lineHeight="tight"
            isTruncated
            wordBreak="break-word"
            flexWrap="wrap"
            whiteSpace="break-spaces"
          >
            {descPara}
          </Box> */}
        </Box>
      </Box>
    </div>
  );
};

export default ProductCard;
