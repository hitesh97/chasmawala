import React, { useEffect, useState } from "react";
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

const HeroTile = ({
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
      <div className="text--center">
        <img className="featureImage_src-pages-" src={imgSrc} alt={imgAlt} />
      </div>
      <h3>{title}</h3>
      <p>{descPara}</p>
    </div>
  );
};
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
      <div className="row">
        {heroTileData.map((tile) => (
          <HeroTile
            key={tile.id}
            title={tile.title}
            imgSrc={tile.imgSrc}
            imgAlt={tile.title}
            descPara={tile.description}
          />
        ))}
      </div>
    );
  }
}

export default Home;
