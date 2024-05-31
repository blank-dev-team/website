import Nav from "../Home/Nav";
import "./ServicesHero.css";
import Services from "../Images/Services.png";
import { useState } from "react";
import Modal from "../Home/Modal";

function ServicesHero({ notify }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="servicesHero">
      <Nav></Nav>
      <div>
        <div className="grid lg:grid-cols-2 mt-6 lg:px-24 px-8">
          <div className="hero-container__text-box lg:self-center">
            <h1 className="text-box__primary w-full lg:text-4xl lg:w-10/12 lg:leading-relaxed">
              <span className="spanner">The Versatile</span> payment card you
              need
            </h1>
            <p className="text-box__secondary lg:w-[44ch]">
              With Blank Card, you can now leave all your cards at home and take
              only one card with you wherever you go. Isn't that just
              convenient?
            </p>
            {/* Modal btn */}
            <button onClick={() => setOpenModal(true)} className="Modal-btn">
              Get Started
            </button>
            <Modal
              open={openModal}
              onClose={() => setOpenModal(false)}
              notify={notify}
            />
          </div>
          <div className="hero-container__img-box hidden lg:block">
            <img className="img-box-img" src={Services} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesHero;
