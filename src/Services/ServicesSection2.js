import "./ServicesSection2.css";
import SmarterWay from "../Images/Smarter way.png";
import { useState } from "react";
import Modal from "../Home/Modal";
import Rocket from "../Images/white-rocket.svg";
function ServicesSection2() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="services-section-2">
      <div className="services-section-container">
        <div className="services-text-box">
          <h1 className="services-primary-text">
            A Smarter Way to Shop and Pay
          </h1>
          <p className="services-secondary-text">
            Manage all your payment cards in one place, minimizing wallet
            clutter and simplifying your payment life. What are you waiting for?
          </p>
          {/* Modal btn */}
          <button onClick={() => setOpenModal(true)} className="Modal-btn">
            Start Now <img className="rocket" src={Rocket} alt="" />
          </button>
          <Modal open={openModal} onClose={() => setOpenModal(false)} />
        </div>
        <div className="services-img-box">
          <img className="Smarterway-img" src={SmarterWay}  alt="" />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection2;
