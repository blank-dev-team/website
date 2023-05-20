import "./ContactUs.css";
import Nav from "../Home/Nav";
import Info from "./Info";
import ContactForm from "./ContactForm";
import Footer from "../Home/Footer";

function ContactUs() {
  return (
    <div className="contactus">
      {/* <Nav></Nav> */}
      <Info></Info>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default ContactUs;
