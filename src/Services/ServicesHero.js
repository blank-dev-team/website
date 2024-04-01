import Nav from "../Home/Nav";
import "./ServicesHero.css";
import Services from "../Images/Services.png";
import { useState } from "react";
import Modal from "../Home/Modal";

function ServicesHero() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="servicesHero">
      <Nav></Nav>
      <div>
        <div className="hero-container">
          <div className="hero-container__text-box">
            <h1 className="text-box__primary ppt">
              <span className="spanner">The Versatile</span> payment card you
              need
            </h1>
            <p className="text-box__secondary">
              With Blank Card, you can now leave all your cards at home and take
              only one card with you wherever you go. Isn't that just
              convenient?
            </p>
            {/* Modal btn */}
            <button onClick={() => setOpenModal(true)} className="Modal-btn">
              Get Started
            </button>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
          <div className="hero-container__img-box">
            <img className="img-box-img" src={Services}  alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesHero;
