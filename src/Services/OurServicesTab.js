import "./OurServicesTab.css";
import Addcard from "../Images/Add card.svg";
import RequestCard from "../Images/Request card 1.svg";
import CardHistory from "../Images/Card history.svg";
import SuperTransfer from "../Images/Super transfer.svg";
import CardData from "./CardData";
import React, { useState } from "react";

import CardTabs from "./CardTabs";

function OurServicesTab() {
  const [active, setActive] = useState(0);
  const activeClass = '!text-white !stroke-white'


  return (
    <div>
      {/* {data.map((item, i) => ( */}
      <div className="tab-container">
        <div className="flex z-10 justify-between mx-w-8/12 mx-auto mt-10 lg:[&>div>img]:w-[80px] [&>div>img]:w-[40px] lg:[&>div>p]:text-lg [&>div>p]:text-xs">
          <div
            onClick={() => setActive(0)}
            className="grid gap-1 justify-items-center">
            <img
              // onClick={() => setActiveBtn(!activeBtn)}
              className={active === 0 ? activeClass : "service-btn"
              }
              src={RequestCard}
            alt="" />
            <p className={active === 0 ? activeClass : "text-[#9c9ba6]"}>
              Request Card
            </p>
          </div>
          <div
            onClick={() => setActive(1)}
            className="grid gap-1 justify-items-center">
            <img
              className={active === 1 ? activeClass : "service-btn"
              }
              src={Addcard}
            alt="" />
            <p className={active === 1 ? activeClass : "text-[#9c9ba6]"}>Add Card</p>
          </div>
          <div
            onClick={() => setActive(2)}
            className="grid gap-1 justify-items-center">
            <img
              className={
                active === 2 ? activeClass  : "service-btn"
              }
              src={CardHistory}
            alt="" />
            <p className={active === 2 ? activeClass : "text-[#9c9ba6]"}>
              Card History
            </p>
          </div>
          <div
            onClick={() => setActive(3)}
            className="grid gap-1 justify-items-center"
          >
            <img
              className={active === 3 ? activeClass : "service-btn"}
              src={SuperTransfer}
            alt="" />
            <p className={active === 3 ? activeClass : "text-[#9c9ba6]"}>
              Super Transfer
            </p>
          </div>
        </div>
        <div className="mt-16">
         <CardTabs data={CardData[active]}/>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}


export default OurServicesTab;
