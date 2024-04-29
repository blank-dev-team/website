import "./ContactUs.css";
import Info from "./Info";
import ContactForm from "./ContactForm";
import Footer from "../Home/Footer";

function ContactUs() {
  return (
    <div className="contactus">
      <Info/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default ContactUs;
