import React from "react";
import "./FourColContent.css";

const FourColContent = ({
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
    <div className="col col--4">
      <div className="slideItem-image-img">
        <img className="featureImage" src={imgSrc} alt={imgAlt} />
      </div>
      <h3>{title}</h3>
      <p>{descPara}</p>
    </div>
  );
};

export default FourColContent;
