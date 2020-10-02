import React, { FunctionComponent } from "react";
// import * as Icons from "@fortawesome/free-solid-svg-icons";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FooterMenu.css";

const FooterMenu: FunctionComponent = ({ children }) => (
  <footer className="footer footer--dark">
    <div className="footer-container">
      <div className="row footer__links">
        <div className="col">
          <h4 className="footer__title">Men's</h4>
          <ul className="footer__items">
            <li className="footer__item">
              <a className="footer__link-item" href="#">
                Regular Frames
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link-item" href="#">
                Aviator Frames
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link-item" href="#">
                Varifocal Frames
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link-item" href="#">
                Rimless Frames
              </a>
            </li>
          </ul>
        </div>
        <div className="col footer__col">
          <h4 className="footer__title">Women's</h4>
          <ul className="footer__items">
            <li className="footer__item">
              <a className="footer__link-item" href="#">
                Rectangulae Frames
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link-item" href="#">
                Oval Frames
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link-item" href="#">
                Varifocal Frames
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link-item" href="#">
                Semi-Rimless Frames
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link-item" href="#">
                Designer Frames
              </a>
            </li>
          </ul>
        </div>
        <div className="col footer__col">
          <h4 className="footer__title">Help & Faq</h4>
          <ul className="footer__items">
            <li className="footer__item">
              <a className="footer__link-item" href="#">
                Your prescription
              </a>
            </li>
            <li className="footer__item">
              <a
                className="footer__link-item"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                Free returns
              </a>
            </li>
          </ul>
        </div>
        <div className="col footer__col">
          <h4 className="footer__title">About Us</h4>
          <ul className="footer__items">
            <li className="footer__item">
              <a className="footer__link-item" href="#">
                About chasmawala
              </a>
            </li>
            <li className="footer__item">
              <a
                className="footer__link-item"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                Why Choose us
              </a>
            </li>
            <li className="footer__item">
              <a
                className="footer__link-item"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                Customer Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className="col footer__col">
          <div className="footer-social">
            <FontAwesomeIcon
              icon={Brands.faFacebookSquare}
              size="2x"
              className="footer-social-icons"
              height="20px"
            />
            <FontAwesomeIcon
              icon={Brands.faTwitterSquare}
              size="2x"
              className="footer-social-icons"
              height="20px"
            />
            <FontAwesomeIcon
              icon={Brands.faInstagramSquare}
              size="2x"
              className="footer-social-icons"
              height="20px"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="footer-nav-container">
      <div className="footer-nav-items-left text--center">
        Terms & Conditions | Privacy Policy | Site Terms
      </div>
      <div className="footer-nav-items-right text--center">
        Copyright © 2020 chasmawala.com and its affiliates 2004-2020. All rights
        reserved.
      </div>
    </div>
  </footer>
);
export default FooterMenu;
