import React, { useEffect, useState } from "react";
import ResponsiveCarousel from "./components/CarouselItems";
import FourColContent from "./components/FourColContent";
// import axios from "axios";

import "./Home.css";

/* interface IRestaurant {
  name: string;
  Description: string;
  id: string;
} */

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

const section1Data = [
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
];

const section2Data = [
  {
    id: "3",
    title: "Powered by React",
    imgSrc: "static/img/undraw_docusaurus_mountain.svg",
    description:
      "Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.",
  },
];

class Home extends React.Component<{}, {}> {
  state = {};

  /*  componentDidMount = async () => {
    try {
      const response = await axios.get("http://localhost:1337/restaurants");
      this.setState({ restaurants: response.data });
    } catch (error) {
      this.setState({ error });
    }
  }; */

  public render() {
    return (
      <>
        <div className="row">
          {heroTileData.map((tile) => (
            <FourColContent
              key={`hero-${tile.id}`}
              title={tile.title}
              imgSrc={tile.imgSrc}
              imgAlt={tile.title}
              descPara={tile.description}
            />
          ))}
        </div>
        <div className="row">
          {section1Data.map((tile) => (
            <FourColContent
              key={`sec1-${tile.id}`}
              title={tile.title}
              imgSrc={tile.imgSrc}
              imgAlt={tile.title}
              descPara={tile.description}
            />
          ))}
        </div>
        <div className="row">
          {section2Data.map((tile) => (
            <FourColContent
              key={`sec2-${tile.id}`}
              title={tile.title}
              imgSrc={tile.imgSrc}
              imgAlt={tile.title}
              descPara={tile.description}
            />
          ))}
        </div>
        <ResponsiveCarousel />
      </>
    );
  }
}

export default Home;
