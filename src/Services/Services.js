import Nav from "../Home/Nav";
import ServicesHero from "./ServicesHero";
import Footer from "../Home/Footer";
import OurServices from "./OurServices";

function Services() {
  return (
    <div className="services">
      {/* <Nav></Nav> */}
      <ServicesHero></ServicesHero>
      <OurServices></OurServices>
      <Footer></Footer>
    </div>
  );
}

export default Services;
