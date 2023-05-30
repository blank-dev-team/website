import Nav from "../Home/Nav";
import Accordian from "./Accordian";
import TypesExample from "./Accordian";
import "./FaqMain.css";

function FaqMain() {
  return (
    <div>
      {/* <Nav></Nav> */}
      <div className="FaqMain-container">
        <div className="FaqMain">
          <div className="FaqMain-text-container">
            <h1 className="FaqMain-heading-primary">
              Frequently Asked Questions
            </h1>
            <p className="FaqMain-heading-secondary">
              Find some of the most commonly asked questions and answers. If
              your question isn't here, feel free to reach out.
            </p>
            <a className="cta-btn faq-btn" href="#">
              Contact Us
            </a>
          </div>
          <div className="FaqMain-accordian">
            <Accordian />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqMain;
