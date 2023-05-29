import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Pic1 from "../Images/About 1.png";
import Pic2 from "../Images/About 2.png";
import Pic3 from "../Images/About 3.png";
import "@splidejs/react-splide/css";

import "./Slider.css";

function Slider() {
  return (
    <Splide
      options={{
        rewind: true,
        gap: "1rem",
      }}
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <div className="carousel-1">
          <div className="carousel-img-container">
            <img className="carousel-img" src={Pic1} />
          </div>
          <h1 className="carousel-text">
            Blank Card allows you to link and unlink your cards with just a few
            clicks, making it easy to switch between different payment methods
            as you need them.
          </h1>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="carousel-1">
          <div className="carousel-img-container">
            <img className="carousel-img" src={Pic2} />
          </div>
          <h1 className="carousel-text">
            With our unlink feature, you can be sure that your mapped cards are
            secure and protected in case your Blank Card is ever lost or stolen.
          </h1>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="carousel-1">
          <div className="carousel-img-container">
            <img className="carousel-img" src={Pic3} />
          </div>
          <h1 className="carousel-text">
            With Blank Card, you can shop anywhere you want, whether in-store or
            online, on your Apple or Google Wallets, giving you even more
            convenience and flexibility.
          </h1>
        </div>
      </SplideSlide>
    </Splide>
  );
}

export default Slider;
