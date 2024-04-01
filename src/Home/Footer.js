import "./Footer.css";
import Phones from "../Images/newPhones.png";
import FooterIcon from "../Images/FooterIcon.png";
import logo from "../Images/Logo.png";
import Facebook from "../Images/facebook.svg";
import Instagram from "../Images/instagram.svg";
import Twitter from "../Images/twitter.svg";
import Linkedin from "../Images/linkedin.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container onboard">
        <div className="footer-container-container">
          <div className="footer-container-img-container">
            <img className="phone-img" src={Phones} alt="" />
          </div>
          <div className="footer-container-img_text-box">
            <h2 className="footer-text-primary">Ready to Get Started?</h2>
            <h4 className="footer-text-secondary">
              Sign up to get your Blank Card today and get smarter managing your
              cards.
            </h4>
            <form className="form-email">
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Your Email"></input>
              <button>
                <img className="footer-icon" src={FooterIcon}  alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-border container-border"></div>
      <div className="footer-links container">
        <div className="footer-links__logo-links">
          <a href="#">
            <img className="logo" src={logo} alt="Blank Technologies"/>
          </a>
          <p className="tagline">The Only Card You'll Ever Need</p>
          <div className="footer-links__logo-links__social-links">
            <a href="#">
              <img src={Facebook}  alt="" />
            </a>
            <a href="#">
              <img src={Twitter}  alt="" />
            </a>
            <a href="#">
              <img src={Linkedin}  alt="" />
            </a>
            <a href="#">
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-links_logo-links">
          <a href="#">
            <h3 className="footer-links_logo-links__heading">Quick Links</h3>
          </a>
          <a href="#">
            <p className="footer-links_logo-links__secondary">About Us</p>
          </a>
          <a href="#">
            <p className="footer-links_logo-links__secondary">Services</p>
          </a>
        </div>
        <div className="footer-links_logo-links">
          <a href="#">
            <h3 className="footer-links_logo-links__heading">Legal</h3>
          </a>
          <a href="#">
            <p className="footer-links_logo-links__secondary">Privacy Policy</p>
          </a>
          <a href="#">
            <p className="footer-links_logo-links__secondary">Terms Of Use</p>
          </a>
        </div>
        <div className="footer-links_logo-links">
          <a href="#">
            <h3 className="footer-links_logo-links__heading">Help</h3>
          </a>
          <a href="#">
            <p className="footer-links_logo-links__secondary">FAQ</p>
          </a>
          <a href="#">
            <p className="footer-links_logo-links__secondary">Contact Us</p>
          </a>
        </div>
      </div>
      <div className="footer-border-2 container-border"></div>
      <div className="footer-end-container">
        <p className="footer-end">
          Blank Technologies Ltd, registered in Nigeria, #09523903
        </p>
        <p className="footer-end">
          Copyright - 2023 © Blank Tech ltd. The Blank Card, the Blank app and
          everything related is a product of Blank Technologies Limited. Located
          at 8 Musa Akor Off Akin Oshiyemi street Allen Avenue, Lagos
        </p>
      </div>
    </div>
  );
}

export default Footer;
