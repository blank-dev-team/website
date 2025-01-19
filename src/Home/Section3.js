import "./Section3.css";
import PaymentImg from "../Images/newPaymentImage.png";
import CookingModal from "./CookingModal.js";
import { ToastContainer } from "react-toastify";

import { useState } from "react";
import { Icon } from "@iconify/react";

function Section3({ notify }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="section-3 mt-20 h-auto bg-[#fffcf2]">
      <ToastContainer theme="dark" />
      <div className="py-24 lg:py-32 lg:grid md:px-10 md:grid-cols-[.7fr,1.3fr] lg:grid-cols-[1.3fr,1fr]">
        <div className="flex z-0 justify-center h-[250px] lg:h-[350px] lg:w-auto">
          <img className="h-full" src={PaymentImg} alt="" />
        </div>
        <div className="container__text-box text-center lg:text-left">
          <h3
            style={{ textShadow: "1px -1px #fffcf2" }}
            className="text-[1.6rem] md:max-w-[30ch] mx-auto
          lg:text-[2rem] text-[#3f3d56] font-bold -mt-28 pb-20 lg:ml-0 pt-20 from-40% relative z-50 bg-gradient-to-t from-[#fffcf2]"
          >
            Secure and Convenient Payment Solutions
          </h3>
          <p className="text-box__header-secondary md:!max-w-[55ch] mx-auto !text-sm lg:!text-base -mt-10 relative z-50 lg:px-0 px-4">
            Blank Card provides a secure and convenient payment solution, with
            an unlink feature that protects your mapped cards in case of loss or
            theft. It is easy to replace, leaving your financial assets intact.
          </p>
          <div className="flex justify-center lg:justify-start lg:mx-0 gap-4 items-center mx-4">
            <button
              className="bg-[#3f3d56] p-2 max-w-[200px] rounded-md flex gap-2 items-center w-full justify-center"
              onClick={() => setOpenModal(true)}
            >
              <Icon
                className="text-4xl lg:text-4xl"
                icon="logos:google-play-icon"
              />
              <div className="text-white grid text-left w-fit">
                <span className="text-lg">Get it on</span>
                <span className="text-lg block w-fit font-bold !text-nowrap">
                  Google Play
                </span>
              </div>
            </button>
            <button
              className="!bg-[#3f3d56] max-w-[200px] p-2 h-fit rounded-md w-full flex gap-2 items-center justify-center"
              onClick={() => setOpenModal(true)}
            >
              <Icon
                className="text-4xl lg:text-4xl text-white"
                icon="file-icons:apple"
              />
              <div className="text-white grid text-left w-fit">
                <span className="text-lg">Get it on</span>
                <span className="text-lg block w-fit font-bold !text-nowrap">
                  Apple Store
                </span>
              </div>
            </button>
            <CookingModal
              open={openModal}
              onClose={() => setOpenModal(false)}
              notify={notify}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
