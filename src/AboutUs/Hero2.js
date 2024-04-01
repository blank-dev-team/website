import Modal from "../Home/Modal";
import About from "../Images/Aboutus.png";
import { useState } from "react";
import "./Hero2.css";
import Nav from "../Home/Nav";

function Hero2() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="hero2">
      <Nav/>
      <div className="hero-container">
        <div className="hero-container__text-box">
          <h1 className="text-box__primary">
            <span className="spanner">One Card</span> for all your<br></br>{" "}
            other cards.
          </h1>
          <p className="text-box__secondary">
            With Blank Card, you can now leave all your cards at home and take
            only one card with you wherever you go. Isn't that just convenient?
          </p>
          {/* Modal btn */}
          <button onClick={() => setOpenModal(true)} className="Modal-btn">
            Get started
          </button>
          <Modal open={openModal} onClose={() => setOpenModal(false)} />
        </div>
        <div className="hero-container__img-box">
          <img className="img-box-img" src={About}  alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero2;
