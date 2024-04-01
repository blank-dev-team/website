import "./Section4.css";
import HoldingCard from "../Images/newHoldingCard.png";
import Rocket from "../Images/white-rocket.svg";
import Modal from "./Modal.js";
import { useState } from "react";

function Section4() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="section-4">
      <div className="container-1">
        <div className="grid grid--2-cols">
          <div className="text-side container__text-box b-1">
            <h1 className="text-box__header-primary">
              The Only Card You'll Ever Need
            </h1>
            <p className="text-box__header-secondary">
              Blank Card is the only payment card you will ever need, allowing
              you to shop anywhere, whether in-store or online, with ease and
              confidence.
            </p>
            {/* Modal btn */}
            <button onClick={() => setOpenModal(true)} className="Modal-btn">
              Get Now <img className="rocket" src={Rocket} alt="" />
            </button>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
          <div className="container__img-box-1 b-2">
            <img className="box-img-4" src={HoldingCard}  alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
