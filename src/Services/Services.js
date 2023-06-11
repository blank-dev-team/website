import Nav from "../Home/Nav";
import ServicesHero from "./ServicesHero";
import Footer from "../Home/Footer";
import OurServices from "./OurServices";
import ServicesSection2 from "./ServicesSection2";

function Services() {
  return (
    <div className="services">
      {/* <Nav></Nav> */}
      <ServicesHero></ServicesHero>
      <OurServices></OurServices>
      <ServicesSection2 />
      <Footer></Footer>
    </div>
  );
}

export default Services;
