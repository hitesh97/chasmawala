import React, { useEffect, useState } from "react";
import logo from "./react.svg";
import axios from "axios";

import "./Home.css";

interface IRestaurant {
  name: string;
  Description: string;
  id: string;
}

class Home extends React.Component<{}, {}> {
  state = {
    restaurants: Array<IRestaurant>(),
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get("http://localhost:1337/restaurants");
      // console.log(response.data[0].Description);
      this.setState({ restaurants: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };
  public render() {
    const { error, restaurants } = this.state;
    return (
      <div className="container">
        <div className="box header">box 1</div>
        <div className="box content">
          <ul>
            {restaurants.map((rest) => {
              return (
                <i key={rest.id}>
                  {rest.name}--{rest.Description}
                </i>
              );
            })}
          </ul>
        </div>
        <div className="box footer">box 3</div>
      </div>
    );
    /* return (
      <div className="Home">
        <div className="Home-header">
          <h2>Welcome to Razzles</h2>
        </div>
        <div className="content">
          <ul>
            {restaurants.map((rest) => {
              return (
                <i key={rest.id}>
                  {rest.name}--{rest.Description}
                </i>
              );
            })}
            here
          </ul>
        </div>

        <div className="Home-footer">
          <h2>Welcome to Razzles</h2>
        </div>
      </div>
    ); */
  }
}

export default Home;
