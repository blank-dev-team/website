import "./Hero.css";
import Nav from "./Nav";
import HeroImg from "../Images/Hero.png";
import Modal from "./Modal.js";
import { useState } from "react";

function Hero() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="hero-hero">
      <div className="hero h-[100svh] w-screen">
        <Nav/>
        <div className="hero-container-1 grid grid-cols-1
        lg:grid-cols-[5fr_3fr]
        xl:grid-cols-[5fr_4fr] w-screen !py-0">
          <div className="mt-14 ml-6 lg:ml-28">
            <h1 className="hero-container__text-box-heading-primary md:w-[20ch] md:text-5xl text-4xl lg:text-[2.5em] xl:text-[3.5em]">
              Hello to
              <span className="text-[#ff7043]"> Convenience. </span> <br className="lg:block hidden"/> All your cards
              in <br className="sm:block hidden"/> one place!
            </h1>
            <div
                className="text-white text-sm md:text-base max-w-[500px] leading-relaxed md:leading-loose">
              Now you can put all your cards in one card. Never have to
              fumble between cards again when you need to pay at a
              terminal.
            </div>
            {/* Modal btn */}
            <button onClick={() => setOpenModal(true)} className="Modal-btn !mt-10 md:!mt-20 ">
              Get started
            </button>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
          <div className="hero-container__img-box lg:block hidden">
            <img className="hero-img" src={HeroImg}  alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
