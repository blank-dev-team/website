import "./Carousel.css";
import img1 from "../Images/Aboutus.png";
import img2 from "../Images/floating-card.png";
import img3 from "../Images/HoldingCard.png";

const slides = [img1, img2, img3];

// Images
const Img1 = { img1 };
const Img2 = { img2 };
const Img3 = { img3 };

function Carousel() {
  return (
    <div className="carousel-container">
      <div>Carousel </div>
      <div>Carousel </div>
    </div>
  );
}

export default Carousel;
