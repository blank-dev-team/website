import "./Hero.css";
import Nav from "./Nav";
import HeroImg from "../Images/Hero.png";
import Modal from "./Modal.js";
import { useState } from "react";

function Hero() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="hero-hero">
      <div className="hero">
        <Nav/>
        <div className="hero-container-1">
          <div className="hero-container__text-box">
            <h1 className="hero-container__text-box-heading-primary">
              Hello to <br className="mobile-br"></br>{" "}
              <span className="fig">Convenience.</span>
              <br></br>All your cards in one<br></br> place!
            </h1>
            <h3 className="hero-container__text-box-heading-secondary">
              Now you can put all your cards in one card.Never have to<br></br>{" "}
              fumble between cards again when you need to pay at a
              <br className="tab-br"></br> terminal.
            </h3>
            {/* Modal btn */}
            <button onClick={() => setOpenModal(true)} className="Modal-btn">
              Get started
            </button>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
          <div className="hero-container__img-box">
            <img className="hero-img" src={HeroImg}  alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
