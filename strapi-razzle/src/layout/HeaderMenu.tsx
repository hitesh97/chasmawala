import React, { FunctionComponent } from "react";

const HeaderMenu: FunctionComponent = () => (
  <div className="box header">
    <nav className="nav-container">
      <div className="nav-items-left">
        <a className="navbar__brand" href="/">
          <img
            className="navbar__logo"
            src="static/img/sun_glasses_logo.svg"
            alt="My Site Logo"
            height="32px"
            width="32px"
          />
          <strong className="navbar__title">chasmawala.com</strong>
        </a>
        <a className="navbar__item navbar__link" href="/docs">
          Docs
        </a>
        <a className="navbar__item navbar__link" href="/blog">
          Blog
        </a>
      </div>
      <div className="nav-items-right">&nbsp;</div>
    </nav>
  </div>
);
export default HeaderMenu;
