import React from "react";
import ResponsiveCarousel from "./components/ResponsiveCarousel";
import FourColContent from "./components/FourColContent";
// import axios from "axios";

import "./Home.css";
import ResponsiveImageCarousel from "./components/ResponsiveImageCarousel";

import Zoom from "react-reveal/Zoom";

import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "./components/ProductCard";

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

const productData = [
  {
    id: "01",
    title: "Whitley",
    price: "19.99",
    imgSrc: "static/img/products/glasses-01.jpg",
    description:
      "With a choice of colours you can be sure to find Whitley in a style that you love. Its minimalist design will compliment your style with ease. Lightweight and easy to wear with a comforting finish.",
  },
  {
    id: "02",
    title: "Whitley-02",
    price: "29.99",
    imgSrc: "static/img/products/glasses-02.jpg",
    description:
      "02 - With a choice of colours you can be sure to find Whitley in a style that you love. Its minimalist design will compliment your style with ease. Lightweight and easy to wear with a comforting finish.",
  },
  {
    id: "03",
    title: "Whitley-03",
    price: "49.99",
    imgSrc: "static/img/products/glasses-03.jpg",
    description:
      "03 - With a choice of colours you can be sure to find Whitley in a style that you love. Its minimalist design will compliment your style with ease. Lightweight and easy to wear with a comforting finish.",
  },
  {
    id: "04",
    title: "Whitley-04",
    price: "19.99",
    imgSrc: "static/img/products/glasses-04.jpg",
    description:
      "03 - With a choice of colours you can be sure to find Whitley in a style that you love. Its minimalist design will compliment your style with ease. Lightweight and easy to wear with a comforting finish.",
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

  componentDidMount() {
    AOS.init({ duration: 1500, delay: 1000 });
  }
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
          {productData.map((tile) => (
            <ProductCard
              key={`product-${tile.id}`}
              title={tile.title}
              imgSrc={tile.imgSrc}
              imgAlt={tile.title}
              price={tile.price}
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
        <Zoom>
          <div className="row heroCenter">
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
        </Zoom>
        <ResponsiveCarousel />
        <div className="container-half-width">
          <ResponsiveImageCarousel />
          <ResponsiveImageCarousel />
        </div>
      </>
    );
  }
}

export default Home;
