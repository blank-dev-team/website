// import "./CardTabs.css";
import "./OurServicesTab.css";
import { Player } from "@lottiefiles/react-lottie-player";

function CardTabs({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div className="player-container grid grid-cols-1 lg:grid-cols-2 items-center -mt-20 lg:mt-0">
          {/* <p>{item.player}</p> */}
          <Player
            className="player"
            src={item.player}
            loop
            autoplay
            speed={2}
          />
          <p className="text-sm lg:leading-loose -mt-10 text-center text-white lg:text-[1.4rem] text-left italic">{item.playerText}</p>
        </div>
      ))}
    </div>
  );
}

export default CardTabs;
