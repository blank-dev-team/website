import "./ServicesSection2.css";
import SmarterWay from "../Images/Smarter way.png";
import { useState } from "react";
import Modal from "../Home/Modal";
import Rocket from "../Images/white-rocket.svg";

function ServicesSection2({ notify }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="lg:!mx-40 lg:items-center lg:!my-28 mt-24">
      <div className="grid lg:grid-cols-2 px-4">
        <div className="order-2 lg:order-1 grid lg:content-center justify-center lg:justify-left lg:justify-items-left">
          <h3
            style={{ textShadow: "1px -1px white" }}
            className="services-primary-text lg:w-9/12 font-semibold text-[#3f3350] mb-4 lg:text-4xl lg:mt-0 text-center lg:text-left -mt-10 pt-3 from-70% relative z-50 bg-gradient-to-t from-white"
          >
            A Smarter Way to Shop and Pay
          </h3>
          <p className="text-sm lg:text-left text-center lg:text-[1.4rem] lg:leading-[1.3]">
            Manage all your payment cards in one place, minimizing wallet
            clutter and simplifying your payment life. What are you waiting for?
          </p>
          {/* Modal btn */}
          <button
            onClick={() => setOpenModal(true)}
            className="Modal-btn lg:mx-[unset] mx-auto my-auto lg:mr-auto !mt-14"
          >
            <div className="flex gap-2 justify-center">
              <span>Start Now </span>
              <img className="rocket" src={Rocket} alt="" />
            </div>
          </button>
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            notify={notify}
          />
        </div>
        <div className="services-img-box order-1 lg:order-2 -mt-10">
          <img className="Smarterway-img" src={SmarterWay} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection2;
