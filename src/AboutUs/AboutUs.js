import "./AboutUs.css";

import Hero2 from "./Hero2";
import Footer from "../Home/Footer";
import Why from "./Why";
import Slider from "./Slider";

function AboutUs() {
  return (
    <div className="about-us">
      <Hero2/>
      <Slider/>
      <Why/>
      <Footer/>
    </div>
  );
}

export default AboutUs;
