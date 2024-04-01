import "./OurServicesTab.css";
import Addcard from "../Images/Add card.svg";
import RequestCard from "../Images/Request card 1.svg";
import CardHistory from "../Images/Card history.svg";
import SuperTransfer from "../Images/Super transfer.svg";
import CardData from "./CardData";
import React, { useState } from "react";

import CardTabs from "./CardTabs";

function OurServicesTab() {
  const [active, setActive] = useState("FirstCard");


  return (
    <div>
      {/* {data.map((item, i) => ( */}
      <div className="tab-container">
        <div className="services-button-container">
          <div
            onClick={() => setActive("FirstCard")}
            className="service-button-contained">
            <img
              // onClick={() => setActiveBtn(!activeBtn)}
              className={
                active === "FirstCard" ? "service-btn-active" : "service-btn"
              }
              src={RequestCard}
            alt="" />
            <p
              className={
                active === "FirstCard"
                  ? "service-btn-text-active"
                  : "service-btn-text"
              }
            >
              Request Card
            </p>
          </div>
          <div
            onClick={() => setActive("SecondCard")}
            className="service-button-contained"
          >
            <img
              className={
                active === "SecondCard" ? "service-btn-active" : "service-btn"
              }
              src={Addcard}
            alt="" />
            <p className={
                active === "SecondCard"
                  ? "service-btn-text-active"
                  : "service-btn-text"}>Add Card</p>
          </div>
          <div
            onClick={() => setActive("ThridCard")}
            className="service-button-contained">
            <img
              className={
                active === "ThridCard" ? "service-btn-active" : "service-btn"
              }
              src={CardHistory}
            alt="" />
            <p
              className={
                active === "ThridCard"
                  ? "service-btn-text-active"
                  : "service-btn-text"
              }
            >
              Card History
            </p>
          </div>
          <div
            onClick={() => setActive("FourthCard")}
            className="service-button-contained"
          >
            <img
              className={
                active === "FourthCard" ? "service-btn-active" : "service-btn"
              }
              src={SuperTransfer}
            alt="" />
            <p
              className={
                active === "FourthCard"
                  ? "service-btn-text-active"
                  : "service-btn-text"
              }
            >
              Super Transfer
            </p>
          </div>
        </div>
        <div>
          {active === "FirstCard" && <CardTabs data={CardData} cardIndex={0} />}
          {active === "SecondCard" && (
            <CardTabs data={CardData} cardIndex={1} />
          )}
          {active === "ThridCard" && <CardTabs data={CardData} cardIndex={2} />}
          {active === "FourthCard" && (
            <CardTabs data={CardData} cardIndex={3} />
          )}
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}


export default OurServicesTab;
