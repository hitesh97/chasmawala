import React, { FunctionComponent } from "react";
import FooterMenu from "./FooterMenu";
import HeaderMenu from "./HeaderMenu";

const DefaultLayout: FunctionComponent = ({ children }) => (
  <div className="container">
    <HeaderMenu />
    <div className="box content">
      <header className="hero hero--primary heroBanner_2Ftp">
        <div className="hero-container">
          <h1 className="hero__title">Chasmawala</h1>
          <p className="hero__subtitle">Find your perfect pair!</p>
        </div>
      </header>
      <main>
        <section className="features_src-pages-">
          <div className="pages-container">
            <div>{children}</div>
          </div>
        </section>
      </main>
    </div>
    <FooterMenu />
  </div>
);
export default DefaultLayout;
