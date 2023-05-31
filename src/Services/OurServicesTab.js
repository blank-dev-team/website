import "./OurServicesTab.css";
import Addcard from "../Images/white-add-card.svg";
import RequestCard from "../Images/white-request-card.svg";
import CardHistory from "../Images/white-add-card.svg";
import SuperTransfer from "../Images/white-super-transfer.svg";
import Lottie from "lottie-react";
import { Player } from "@lottiefiles/react-lottie-player";
import RequestCardImg from "../Images/Transport2.json";
import AddCardImg from "../Images/Add-cards.json";
import CardHistoryImg from "../Images/Card-history.json";
import SuperTransferImg from "../Images/Super-Transfer.json";

import React from "react";
import { useState } from "react";

function OurServicesTab() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="tab-container">
      {data.map((item, i) => (
        <div>
          <div className="services-button-container">
            <div className="service-button-contained">
              <img className="service-btn" src={item.svg}></img>
              <p className="service-btn-text">{item.svgName}</p>
            </div>
          </div>
          <div className="player-container">
            <Player
              className="player"
              src={item.player}
              loop
              autoplay
              speed={2}
            />
            <p className="player-text">{item.playerText}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const data = [
  {
    svg: RequestCard,
    svgName: "Request Card",
    player: RequestCardImg,
    playerText:
      "Our Request Card service is designed to make it easy for you to get the payment card you need, exactly when you need it. Simply provide us with your information, and we'll process your request in no time.",
  },
  {
    svg: Addcard,
    svgName: "Add Card",
    player: AddCardImg,
    playerText:
      "With our Add Card service, managing your payment cards has never been easier. Whether you have a new card or want to replace an old one, simply add your card details to our platform and let us take care of the rest.",
  },
  {
    svg: CardHistory,
    svgName: "Card History",
    player: CardHistoryImg,
    playerText:
      "Our View Card History service provides a convenient way for you to keep track of your payment card transactions. With a few clicks, you can view your transaction history and monitor your spending patterns.",
  },
  {
    svg: SuperTransfer,
    svgName: "Super Transfer",
    player: SuperTransferImg,
    playerText:
      "Send money via a host of options available. Whether it be to a bank, a wallet or even a card. You can even send money without entering the recipient's bank details. Only one word to describe that - Super!",
  },
];

export default OurServicesTab;
