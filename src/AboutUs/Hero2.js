import { Link } from "react-router-dom";

import About from "../Images/Aboutus.png";

import "./Hero2.css";
import Nav from "../Home/Nav";

function Hero2() {
  return (
    <div className="hero2">
      <Nav></Nav>
      <div className="hero-container">
        <div className="hero-container__text-box">
          <h1 className="text-box__primary">
            <span className="spanner">One Card</span> for all your other cards.
          </h1>
          <p className="text-box__secondary">
            With Blank Card, you can now leave all your cards at home and take
            only one card with you wherever you go. Isn't that just convenient?
          </p>
          <a className="cta-btn" href="#">
            Get Started
          </a>
        </div>
        <div className="hero-container__img-box">
          <img className="img-box-img" src={About}></img>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
