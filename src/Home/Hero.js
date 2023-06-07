import "./Hero.css";
import Nav from "./Nav";
import HeroImg from "../Images/Hero.png";
import POPUP from "../Images/popup-img.png";
import LOGO from "../Images/Logo.png";

function Hero() {
  return (
    <div>
      <div className="hero">
        <Nav></Nav>
        <div className="hero-container-1">
          <div className="hero-container__text-box">
            <h1 className="hero-container__text-box-heading-primary">
              Hello to <br className="mobile-br"></br>{" "}
              <span className="fig">Convenience.</span>
              <br></br>All your cards in one<br></br> place!
            </h1>
            <h3 className="hero-container__text-box-heading-secondary">
              Now you can put all your cards in one card.Never have to<br></br>{" "}
              fumble between cards again when you need to pay at a terminal.
            </h3>
            <a className="cta-btn-1" href="#popup1">
              Get Started
            </a>
          </div>
          <div className="hero-container__img-box">
            <img className="hero-img" src={HeroImg}></img>
          </div>
        </div>
        <div id="popup1" className="popup">
          <div className="popup-content">
            <div className="popup-left">
              <img src={POPUP}></img>
            </div>
            <div className="popup-right">
              <img src={LOGO} className="popup-logo"></img>
              <h1 className="popup-heading">Please enter your details</h1>
              <form className="popup-form">
                <div className="popup-label-container">
                  <label id="first-name" className="popup-name-label">
                    First name
                  </label>
                  <label id="last-name" className="popup-name-label">
                    Last name
                  </label>
                </div>
                <div className="popup-input-container">
                  <input
                    type="text"
                    for="first-name"
                    className="popup-name-input"
                  ></input>
                  <input
                    type="text"
                    for="last-name"
                    className="popup-name-input"
                  ></input>
                </div>
                <div className="popup-email-div">
                  <label id="email" className="popup-name-label">
                    Email address
                  </label>
                  <input for="email" className="popup-email-input"></input>
                </div>

                <button className="popup-submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
