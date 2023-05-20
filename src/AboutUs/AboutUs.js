import "./AboutUs.css";

import Nav from "../Home/Nav";
import Hero2 from "./Hero2";
import Footer from "../Home/Footer";
import Carousel from "./Carousel";
import Why from "./Why";

function AboutUs() {
  return (
    <div className="about-us">
      {/* <Nav></Nav> */}
      <Hero2></Hero2>
      {/* <Carousel></Carousel> */}
      <Why></Why>
      <Footer></Footer>
    </div>
  );
}

export default AboutUs;
