import "./Section3.css";
import PaymentImg from "../Images/newPaymentImage.png";
import GooglePlay from "../Images/GooglePlay.png";
import AppStore from "../Images/AppStore.png";
import CookingModal from "./CookingModal.js";

import { useState } from "react";

function Section3() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="section-3">
      <div className="container-1 grid grid--2-cols u-margin-top">
        <div className="container__img-box-2">
          <img className="img" src={PaymentImg}  alt="" />
        </div>
        <div className="container__text-box">
          <h1 className="text-box__header-primary">
            Secure and Convenient Payment Solutions
          </h1>
          <p className="text-box__header-secondary">
            Blank Card provides a secure and convenient payment solution, with
            an unlink feature that protects your mapped cards in case of loss or
            theft. It is easy to replace, leaving your financial assets intact.
          </p>
          <div className="text-box__img-container">
            <button className="cooking-btn" onClick={() => setOpenModal(true)}>
              <img
                className="img-container__img"
                src={GooglePlay}
                alt="GooglePlay"
              />
            </button>
            <button className="cooking-btn" onClick={() => setOpenModal(true)}>
              <img
                className="img-container__img"
                src={AppStore}
                alt="Apple App Store"
              />
            </button>
            <CookingModal
              open={openModal}
              onClose={() => setOpenModal(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
