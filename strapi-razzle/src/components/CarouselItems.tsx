import React from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import * as regIcons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CarouselItem.css";

const heroTileData = [
  {
    id: "1",
    title: "Easy to Use",
    imgSrc: "static/img/design_components.svg",
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
    <div>
      <div className="text--center">
        <img className="featureImage_src-pages-" src={imgSrc} alt={imgAlt} />
      </div>
      <h3>{title}</h3>
      <p>{descPara}</p>
    </div>
  );
};

const CustomDots = ({
  items,
  currentSlide,
}: {
  items: Array<any>;
  currentSlide?: number;
}) => {
  return (
    <div className="text--center">
      {items.map((slide, index) => {
        const activeClassName =
          index === currentSlide || 0
            ? "carousel-dot dot-active"
            : "carousel-dot";
        return (
          <FontAwesomeIcon
            key={slide.id}
            icon={regIcons.faCircle}
            size="1x"
            className={activeClassName}
          />
        );
      })}
    </div>
  );
};

const CarouselItems = () => {
  const items = heroTileData.map((tile, index) => (
    <Slide index={index}>
      <SlideItem
        title={tile.title}
        imgSrc={tile.imgSrc}
        imgAlt={tile.title}
        descPara={tile.description}
      />
    </Slide>
  ));
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={70}
      totalSlides={items.length}
      interval={4000}
      isPlaying={true}
    >
      <Slider>{items}</Slider>
      <DotGroup
        disableActiveDots={true}
        renderDots={(props) => {
          console.log("------------ render dots ------------", props);
          return <CustomDots items={items} currentSlide={props.currentSlide} />;
        }}
      ></DotGroup>
    </CarouselProvider>
  );
};
export default CarouselItems;