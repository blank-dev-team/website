import "./Hero.css";
import Nav from "./Nav";
import HeroImg from "../Images/Hero.png";

function Hero() {
  return (
    <div className="hero">
      <Nav></Nav>
      <div className="hero-container">
        <div className="hero-container__text-box">
          <h1 className="hero-container__text-box-heading-primary">
            Hello to <span className="fig">Convenience.</span>All your cards in
            one place!
          </h1>
          <h3 className="hero-container__text-box-heading-secondary">
            Now you can put all your cards in one card.Never have to fumble
            between cards again when you need to pay at a terminal.
          </h3>
          <a className="cta-btn" href="#">
            Get Started
          </a>
        </div>
        <div className="hero-container__img-box">
          <img className="hero-img" src={HeroImg}></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;
