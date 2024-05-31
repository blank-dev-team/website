import ServicesHero from "./ServicesHero";
import Footer from "../Home/Footer";
import OurServices from "./OurServices";
import ServicesSection2 from "./ServicesSection2";

// Toast librabry imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Modal toast message
const notify = () => toast("Recieved! You have been added to the waitlist");

function Services() {
  return (
    <div className="services">
      <ServicesHero notify={notify} />
      <OurServices />
      <ServicesSection2 notify={notify} />
      <Footer />
      <ToastContainer theme="dark" />
    </div>
  );
}

export default Services;
