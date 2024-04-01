// import "./CardTabs.css";
import "./OurServicesTab.css";
import { Player } from "@lottiefiles/react-lottie-player";

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
