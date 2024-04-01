import React, { useState } from "react";
import Pic1 from "../Images/About 1.png";
import Pic2 from "../Images/About 2.png";
import Pic3 from "../Images/About 3.png";
import "./Slider.css";

function Slider() {
    const [activeSlide, setActiveSlide] = useState(0);
  setInterval(() => {
      setActiveSlide(((activeSlide + 1) % slideItem.length));
      console.log(activeSlide);
  }, 4000);

  const slideItem = [
    {
      img: Pic1,
      text: "Blank Card allows you to link and unlink your cards with just a few clicks, making it easy to switch between different payment methods as you need them.",
    },
    {
      img: Pic2,
      text: "With our unlink feature, you can be sure that your mapped cards are secure and protected in case your Blank Card is ever lost or stolen.",
    },
    {
      img: Pic3,
      text: "With Blank Card, you can shop anywhere you want, whether in-store or online, on your Apple or Google Wallets, giving you even more convenience and flexibility."
    }
  ]
  return (
    <section className="slider">
      <div className="slider-image">
        <img src={slideItem[activeSlide].img} alt="" />
      </div>
        <div className="slider-text">
            {slideItem[activeSlide].text}

            <div className="indicators">
                {slideItem.map((item, index) => (
                    <span className={'slider-dots ' + (activeSlide === index ? 'active' : '')}></span>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Slider;
