import "./ServicesSection2.css";
import SmarterWay from "../Images/Smarter way.png";

function ServicesSection2() {
  return (
    <div className="services-section-2">
      <div className="services-section-container">
        <div className="services-text-box">
          <h1 className="services-primary-text">
            A Smarter Way to Shop and Pay
          </h1>
          <p className="services-secondary-text">
            Manage all your payment cards in one place, minimizing wallet
            clutter and simplifying your payment life. What are you waiting for?
          </p>
          <a className="cta-btn" href="#">
            Start Now
          </a>
        </div>
        <div className="services-img-box">
          <img className="Smarterway-img" src={SmarterWay}></img>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection2;
