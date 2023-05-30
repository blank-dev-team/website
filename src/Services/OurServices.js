import "./OurServices.css";
import OurServicesTab from "./OurServicesTab";

function OurServices() {
  return (
    <div className="ourservices">
      <div className="text-container">
        <h1 className="ourservices-header">Our Services</h1>
        <p className="ourservices-text">
          With the Blank app you get to access a whole lot of amazing services
        </p>
      </div>
      <OurServicesTab></OurServicesTab>
    </div>
  );
}

export default OurServices;
