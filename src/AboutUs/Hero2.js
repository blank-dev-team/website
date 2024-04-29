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
      <div className="grid lg:grid-cols-2 gap-10 lg:items-center px-8 lg:!px-24 lg:py-10">
        <div className="hero-container__text-box pt-16">
          <h1 className="text-box__primary !text-4xl lg:!text-5xl !leading-[1.4]">
            <span className="spanner">One Card</span> for all your <br className="hidden lg:block" />
            other cards.
          </h1>
          <p className="text-box__secondary">
            With Blank Card, you can now leave all your cards at home and take
            only one card with you wherever you go. Isn't that just convenient?
          </p>
          {/* Modal btn */}
          <button onClick={() => setOpenModal(true)} className="Modal-btn !mt-10 lg:!mt-0">
            Get started
          </button>
          <Modal open={openModal} onClose={() => setOpenModal(false)} />
        </div>
        <div className="hero-container__img-box hidden lg:block">
          <img className="img-box-img" src={About}  alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero2;
