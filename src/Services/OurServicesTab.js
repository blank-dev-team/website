import "./OurServicesTab.css";
import Addcard from "../Images/white-request-card.svg";
import Lottie from "lottie-react";
import { Player } from "@lottiefiles/react-lottie-player";
import Truck from "../Images/Truck3.gif";
import Transport from "../Images/Transport2.json";

import React from "react";
// import { useState } from "react";

function OurServicesTab() {
  return (
    <div className="tab-container">
      <div className="services-button-container">
        <div className="service-button-contained">
          <img
            className="service-btn"
            // {...(state ? "service-btn" : "service-btn-show")}
            src={Addcard}
          ></img>
          <p className="service-btn-text">Request Card</p>
        </div>
      </div>
      <div className="Service-content">
        <div className="player-container">
          <Player className="player" src={Transport} loop autoplay speed={10} />
          <p className="player-text">
            Our Request Card service is designed to make it easy for you to get
            the payment card you need, exactly when you need it. Simply provide
            us with your information, and we'll process your request in no time.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default OurServicesTab;
