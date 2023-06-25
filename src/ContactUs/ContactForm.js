import { Form } from "react-router-dom";
import "./ContactForm.css";
import Facebook from "../Images/facebook.svg";
import Instagram from "../Images/instagram.svg";
import Twitter from "../Images/twitter.svg";
import Linkedin from "../Images/linkedin.svg";

function ContactForm() {
  return (
    <div className="form">
      <div className="text-heading">
        <h1>Get in Touch</h1>
        <p>
          Feel free to reach out to us on our various platforms, or send us a
          message by<br></br> filling the form below.
        </p>
        <div className="icon-heading">
          <div className="icons">
            <a href="#">
              <img src={Facebook}></img>
            </a>
            <a href="#">
              <img src={Twitter}></img>
            </a>
            <a href="#">
              <img src={Linkedin}></img>
            </a>
            <a href="#">
              <img src={Instagram}></img>
            </a>
          </div>
        </div>
      </div>

      <form className="contact-form">
        <div className="contact-from-container">
          <div className="name-grid">
            <div className="label-grid">
              <label id="first-name">First Name</label>
              <input className="name-input" type="text" for="first-name" />
            </div>
            <div className="label-grid">
              <label id="last-name">Last Name</label>
              <input className="name-input" type="text" for="last-name" />
            </div>
          </div>
          <div className="label-grid">
            <label id="email">Email</label>
            <input
              className="name-input email-input"
              type="email"
              for="email"
            />
          </div>
          <div className="label-grid">
            <label id="Message">Message</label>
            <input className="message-input" type="text" for="message" />
          </div>
        </div>
        <button className="submit-button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
