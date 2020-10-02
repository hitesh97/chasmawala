import React from "react";
// import "pure-react-carousel/dist/react-carousel.es.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./ResponsiveCarousel.css";

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
  /*
  {
    id: "4",
    title: "Easy to Use",
    imgSrc: "static/img/undraw_docusaurus_mountain.svg",
    description:
      "Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.",
  },
  {
    id: "5",
    title: "Focus on What Matters",
    imgSrc: "static/img/undraw_docusaurus_tree.svg",
    description:
      "Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the <code>docs</code> directory.",
  },
  {
    id: "6",
    title: "Powered by React",
    imgSrc: "static/img/undraw_docusaurus_mountain.svg",
    description:
      "Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.",
  },
  {
    id: "7",
    title: "Easy to Use",
    imgSrc: "static/img/undraw_docusaurus_mountain.svg",
    description:
      "Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.",
  },
  {
    id: "8",
    title: "Focus on What Matters",
    imgSrc: "static/img/undraw_docusaurus_tree.svg",
    description:
      "Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the <code>docs</code> directory.",
  },*/
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
    <div className="slideItem">
      <div className="slideItem-image">
        <img className="featureImage_src-pages-" src={imgSrc} alt={imgAlt} />
      </div>
      <h3>{title}</h3>
      <p>{descPara}</p>
    </div>
  );
};

const ResponsiveCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  /*
  const items = heroTileData.map((tile, index) => (
    <SlideItem
      key={`slide${index}`}
      title={tile.title}
      imgSrc={tile.imgSrc}
      imgAlt={tile.title}
      descPara={tile.description}
    />
  ));

  const CustomDot = (props: any) => {
    console.log("--------- CustomDot ----------");
    console.log(props);
    console.log("--------- CustomDot ----------");
    
    // const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        onClick={props.onClick}
        className={
          props.active
            ? "react-multi-carousel-dot react-multi-carousel-dot--active"
            : "react-multi-carousel-dot react-multi-carousel-dot--inactive"
        }
      >
        {heroTileData
          .filter((item, itemIndex) => itemIndex === props.index)
          .map((item, itemIndex) => {
            return (
              <img
                key={`customDot${itemIndex}`}
                src={item.imgSrc}
                height="60px"
                width="60px"
              />
            );
          })}
      </button>
    );
  }; */

  return (
    <Carousel responsive={responsive} showDots={true} arrows={false}>
      {heroTileData.map((tile, index) => (
        <SlideItem
          key={`slide${index}`}
          title={tile.title}
          imgSrc={tile.imgSrc}
          imgAlt={tile.title}
          descPara={tile.description}
        />
      ))}
    </Carousel>
  );
};

export default ResponsiveCarousel;
