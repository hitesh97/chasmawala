import React from "react";
import "./ProductCard.css";

const ProductCard = ({
  title,
  price,
  imgSrc,
  imgAlt,
  descPara,
}: {
  title: string;
  price: string;
  imgSrc: string;
  imgAlt: string;
  descPara: string;
}) => {
  return (
    <div className="col col--4 product-card">
      <div className="product-title">{title}</div>
      <div className="slideItem-image-img">
        <img className="product-card-img" src={imgSrc} alt={imgAlt} />
      </div>
      <div className="priceContainer">
        <div className="price-left">{title}</div>
        <div className="price-right">{price}</div>
      </div>
      <p>{descPara}</p>
    </div>
  );
};

export default ProductCard;
