// import "./CardTabs.css";
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
import CardData from "./CardData";

function CardTabs({ data, cardIndex }) {
  return (
    <div>
      {data[cardIndex].map((item) => (
        <div className="player-container">
          {/* <p>{item.player}</p> */}
          <Player
            className="player"
            src={item.player}
            loop
            autoplay
            speed={2}
          />
          <p className="player-text">{item.playerText}</p>
        </div>
      ))}
    </div>
  );
}

export default CardTabs;
