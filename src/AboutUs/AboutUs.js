import "./AboutUs.css";

import Hero2 from "./Hero2";
import Footer from "../Home/Footer";
import Why from "./Why";
import Slider from "./Slider";

// Toast librabry imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Modal toast message
const notify = () => toast("Recieved! You have been added to the waitlist");

function AboutUs() {
  return (
    <div className="about-us">
      <Hero2 notify={notify} />
      <Slider />
      <Why />
      <Footer />
      <ToastContainer theme="dark" />
    </div>
  );
}

export default AboutUs;
