import "./Section2.css";
import Wallet from "../Images/newWallet.png";
import Floating from "../Images/floating-card.png";
import AddCard from "../Images/newAddCard.svg";
import BlockCard from "../Images/newBlockCard.svg";
import SuperTransfer from "../Images/newSuperTransfer.svg";
import Rocket from "../Images/white-rocket.svg";
import Modal from "./Modal.js";
import { useState } from "react";
import { Link } from "react-router-dom";

function Section2() {
  const [openModal, setOpenModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="section-2">
      <div className="container-1">
        <div className="container-1 grid--2-cols">
          <div className="container__text-box a-1">
            <h1 className="text-box__header-primary">
              Say Goodbye to Wallet Clutter with Blank Card
            </h1>
            <p className="text-box__header-secondary">
              Blank Card simplifies your payment life by letting you manage all
              your payment cards in one place, freeing you from the burden of
              carrying multiple cards.
            </p>
            {/* Modal btn */}
            <button onClick={() => setOpenModal(true)} className="Modal-btn">
              Start Now <img className="rocket" src={Rocket} alt="" />
            </button>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
          <div className="container__img-box a-2">
            <img className="box-img-1" src={Wallet}  alt="" />
          </div>
          <div className="container__img-box a-3">
            <img className="box-img-2" src={Floating}  alt="" />
          </div>
          <div className="container__text-box a-4">
            <h1 className="text-box__header-primary">
              The All-In-One Card Solution
            </h1>
            <p className="text-box__header-secondary">
              Blank Card is a one-stop-shop for all your payment needs, letting
              you link and unlink your cards with just a few clicks, making it
              easy to switch between different payment methods as you need them.
            </p>
            {/* Modal btn */}
            <button onClick={() => setOpenModal(true)} className="Modal-btn">
              Get Onboard <img className="rocket" src={Rocket} alt="" />
            </button>
          </div>
          <div className="container__text-box a-5">
            <h1 className="text-box__header-primary">
              The Future of Payments Is Here with Blank Card
            </h1>
            <p className="text-box__header-secondary">
              Blank Card is the future of payments, providing a secure,
              convenient, and customizable way to manage all your payment cards.
              Add all your cards and enjoy a truly limitless experience.
            </p>
            <Link
              onClick={scrollToTop}
              className="text-box__btn"
              to="/services">
              See More
            </Link>
          </div>
          <div className="container__img-box img-box__grid a-6">
            <div className="box-container">
              <img className="box-icon " src={AddCard}  alt="" />
              <p className="box-icon__text">Add Cards</p>
            </div>
            <div className="box-container">
              <img className="box-icon" src={SuperTransfer} alt="" />
              <p className="box-icon__text">Super Transfer</p>
            </div>
            <div className="box-container">
              <img className="box-icon" src={BlockCard} alt="" />
              <p className="box-icon__text">Block Cards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
