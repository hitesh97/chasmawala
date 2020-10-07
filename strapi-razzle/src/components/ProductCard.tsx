import React from "react";

const ProductCard = ({
  title,
  imgSrc,
  imgAlt,
  descPara,
}: {
  title: string;
  imgSrc: string;
  imgAlt: string;
  descPara: string;
}) => {
  return (
    <div className="slideItem-img">
      <div className="slideItem-image-img">
        <img className="featureImage_src-pages-" src={imgSrc} alt={imgAlt} />
      </div>
      <h3>{title}</h3>
      <p>{descPara}</p>
    </div>
  );
};

export default ProductCard;
