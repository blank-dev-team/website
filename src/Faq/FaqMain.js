import Accordian from "./Accordian";
import Footer from "../Home/Footer";
import "./FaqMain.css";
import { Link } from "react-router-dom";

function FaqMain() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="FaqMain-container">
        <div className="FaqMain">
          <div className="FaqMain-text-container">
            <h2 className="FaqMain-heading-primary">
              Frequently Asked<br></br> Questions
            </h2>
            <p className="FaqMain-heading-secondary">
              Find some of the most commonly asked questions and answers. If
              your question isn't here, feel free to reach out.
            </p>
            <Link
              onClick={scrollToTop}
              className="text-box__btn"
              to="/contactus"
            >
              Contact Us
            </Link>
          </div>
          <div className="FaqMain-accordian">
            <Accordian />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default FaqMain;
