import "./OurServicesTab.css";
import Addcard from "../Images/white-request-card.svg";
import Truck from "../Images/Transport 2.json";

function OurServicesTab() {
  return (
    <div className="tab-container">
      <div className="services-button-container">
        <div className="service-button-contained">
          <img className="service-btn" src={Addcard}></img>
          <p className="service-btn-text">Request Card</p>
        </div>
      </div>
      <div className="Service-content">
        <div>
          <img src={Truck}></img>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default OurServicesTab;
