import "./OurServicesTab.css";
import Addcard from "../Images/Add card.svg";
import RequestCard from "../Images/Request card 1.svg";
import CardHistory from "../Images/Card history.svg";
import SuperTransfer from "../Images/Super transfer.svg";
import Lottie from "lottie-react";
import { Player } from "@lottiefiles/react-lottie-player";
import RequestCardImg from "../Images/Transport2.json";
import AddCardImg from "../Images/Add-cards.json";
import CardHistoryImg from "../Images/Card-history.json";
import SuperTransferImg from "../Images/Super-Transfer.json";
import CardData from "./CardData";
import React, { useState } from "react";

import CardTabs from "./CardTabs";

function OurServicesTab() {
  const [active, setActive] = useState("FirstCard");

  const [activeBtn, setActiveBtn] = useState("");

  const Btntoggle = (i) => {
    if (activeBtn == i) {
      return setActiveBtn(null);
    }

    setActiveBtn(i);
  };

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
            ></img>
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
            ></img>
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

// const data = [
//   {
//     svg: RequestCard,
//     svgName: "Request Card",
//     player: RequestCardImg,
//     playerText:
//       "Our Request Card service is designed to make it easy for you to get the payment card you need, exactly when you need it. Simply provide us with your information, and we'll process your request in no time.",
//   },
//   {
//     svg: Addcard,
//     svgName: "Add Card",
//     player: AddCardImg,
//     playerText:
//       "With our Add Card service, managing your payment cards has never been easier. Whether you have a new card or want to replace an old one, simply add your card details to our platform and let us take care of the rest.",
//   },
//   {
//     svg: CardHistory,
//     svgName: "Card History",
//     player: CardHistoryImg,
//     playerText:
//       "Our View Card History service provides a convenient way for you to keep track of your payment card transactions. With a few clicks, you can view your transaction history and monitor your spending patterns.",
//   },
//   {
//     svg: SuperTransfer,
//     svgName: "Super Transfer",
//     player: SuperTransferImg,
//     playerText:
//       "Send money via a host of options available. Whether it be to a bank, a wallet or even a card. You can even send money without entering the recipient's bank details. Only one word to describe that - Super!",
//   },
// ];

export default OurServicesTab;
