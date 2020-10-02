import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./ResponsiveImageCarousel.css";

const ResponsiveImageCarousel = () => {
  const heroTileData = [
    {
      id: "1",
      title: "Easy to Use",
      imgSrc: "static/img/undraw_docusaurus_tree.svg",
      description:
        "Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.",
    },
    {
      id: "2",
      title: "Focus on What Matters",
      imgSrc: "static/img/undraw_docusaurus_tree.svg",
      description:
        "Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the <code>docs</code> directory.",
    },
    {
      id: "3",
      title: "Powered by React",
      imgSrc: "static/img/undraw_docusaurus_mountain.svg",
      description:
        "Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.",
    },
  ];
  const SlideItem = ({
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

  const items = heroTileData.map((tile, index) => (
    <SlideItem
      key={`slide${index}`}
      title={tile.title}
      imgSrc={tile.imgSrc}
      imgAlt={tile.title}
      descPara={tile.description}
    />
  ));
  return (
    <Carousel className="imageCarousel" autoPlay={true} infiniteLoop={true}>
      {items}
    </Carousel>
  );
};

export default ResponsiveImageCarousel;
