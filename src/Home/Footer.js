import "./Footer.css";
import Phones from "../Images/Phones.png";
import FooterIcon from "../Images/FooterIcon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-container-container">
          <div className="footer-container-img-container">
            <img className="phone-img" src={Phones}></img>
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
                placeholder="Your Email"
              ></input>
              <button>
                <img className="footer-icon" src={FooterIcon}></img>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
