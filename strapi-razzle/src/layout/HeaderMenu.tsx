import React, { FunctionComponent, useEffect, useState } from "react";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HeaderMenu.css";

const HeaderMenu: FunctionComponent = () => {
  const navbarClasses = ["box header"];
  const navMenuContainerClasses = ["nav-container"];
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  if (scrolled) {
    navbarClasses.push("scrolled");
    navMenuContainerClasses.push("nav-container-scrolled");
  }
  return (
    <div className={navbarClasses.join(" ")}>
      <nav className={navMenuContainerClasses.join(" ")}>
        <div className="nav-items-left">
          <a className="navbar__brand" href="/">
            <img
              className="navbar__logo"
              src="/static/img/sun_glasses_logo.svg"
              alt="My Site Logo"
              height="32px"
              width="32px"
            />
            <strong className="navbar__title">chasmaawala.com</strong>
          </a>
          <a className="navbar__item navbar__link" href="#">
            Men
          </a>
          <a className="navbar__item navbar__link" href="#">
            Women
          </a>
          <a className="navbar__item navbar__link" href="#">
            Try at home
          </a>
          <a className="navbar__item navbar__link" href="#">
            Special Offer
          </a>
          <a className="navbar__item navbar__link" href="#">
            Help & FAQ
          </a>
        </div>
        <div className="nav-items-right">
          <a className="navbar__item navbar__link" href="#">
            <FontAwesomeIcon
              icon={Icons.faSearch}
              size="2x"
              className="header-menu-icons icon-search"
              height="20px"
            />
            &nbsp; Search
          </a>
          <FontAwesomeIcon
            icon={Icons.faShoppingCart}
            size="2x"
            className="header-menu-icons"
            height="20px"
          />
        </div>
      </nav>
    </div>
  );
};
export default HeaderMenu;
