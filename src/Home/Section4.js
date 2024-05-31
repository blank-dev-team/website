import "./Section4.css";
import HoldingCard from "../Images/newHoldingCard.png";
import Modal from "./Modal.js";
import { useState } from "react";
import { Icon } from "@iconify/react";

function Section4({ notify }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="section-4">
      <div className="lg:mt-20 lg:mb-20">
        <div className="grid lg:grid-cols-2 md:mx-10 lg:mx-40">
          <div className="text-side order-2 lg:order-1 lg:text-left lg:!mt-0 container__text-box b-1 text-center">
            <h3
              style={{ textShadow: "1px -1px white" }}
              className="text-[1.6rem] text-[#3f3d56]
             font-bold from-50% py-10
             lg:mt-0
            -mt-8 relative z-50 bg-gradient-to-t from-white lg:max-w-[30ch] leading-loose lg:!text-4xl lg:leading-relaxed lg:text-left"
            >
              The Only Card You'll Ever Need
            </h3>
            <p className="text-box__header-secondary lg:!leading-loosed md:max-w-[45ch] mx-auto !text-sm mx-4 lg:text-left lg:!text-lg lg:mx-0 lg:max-w-[45ch]">
              Blank Card is the only payment card you will ever need, allowing
              you to shop anywhere, whether in-store or online, with ease and
              confidence.
            </p>
            {/* Modal btn */}
            <button
              onClick={() => setOpenModal(true)}
              className="Modal-btn lg:mr-auto !inline-flex items-center justify-center gap-2"
            >
              <span> Get Now </span>
              <Icon className="rocket text-xl" icon="simple-icons:rocket" />
            </button>
            <Modal
              open={openModal}
              onClose={() => setOpenModal(false)}
              notify={notify}
            />
          </div>
          <div className="b-2 order-1 lg:order-2 !h-[250px] lg:!h-[350px] mx-auto">
            <img className="!h-full !w-auto" src={HoldingCard} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
