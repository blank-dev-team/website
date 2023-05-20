import Nav from "../Home/Nav";
import "./ServicesHero.css";
import Services from "../Images/Services.png";

function ServicesHero() {
  return (
    <div className="servicesHero">
      <Nav></Nav>
      <div className="contain">
        <div className="hero-container">
          <div className="hero-container__text-box">
            <h1 className="text-box__primary ppt">
              <span className="spanner">The Versatile</span> payment card you
              need
            </h1>
            <p className="text-box__secondary">
              With Blank Card, you can now leave all your cards at home and take
              only one card with you wherever you go. Isn't that just
              convenient?
            </p>
            <a className="cta-btn" href="#">
              Get Started
            </a>
          </div>
          <div className="hero-container__img-box">
            <img className="img-box-img" src={Services}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesHero;
