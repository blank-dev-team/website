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

function Section2({ notify }) {
  const [openModal, setOpenModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="section-2 pt-20 pt-0 px-8 md:px-28 lg:!px-40">
      <div>
        <div className="lg:mt-14 mt-0 pt-0 items-center gap-y-20 relative grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <h1 className="text-box__header-primary w-9/12 lg:w-full">
              Say Goodbye to Wallet Clutter with Blank Card
            </h1>
            <p className="text-box__header-secondary">
              Blank Card simplifies your payment life by letting you manage all
              your payment cards in one place, freeing you from the burden of
              carrying multiple cards.
            </p>
            {/* Modal btn */}
            <button onClick={() => setOpenModal(true)} className="Modal-btn">
              <div className="flex w-full items-center justify-center gap-2">
                <span>Start Now</span>
                <span>
                  {" "}
                  <img className="rocket" src={Rocket} alt="" />
                </span>
              </div>
            </button>
            <Modal
              open={openModal}
              onClose={() => setOpenModal(false)}
              notify={notify}
            />
          </div>
          <div className="">
            <img
              className="box-img-1 lg:!w-6/12 md:!w-3/12 md:!-top-8 md:-right-6 lg:static absolute -right-5 top-8 !w-5/12"
              src={Wallet}
              alt=""
            />
          </div>
          <div className="container__img-box lg:!w-full lg:static absolute md:top-[380px] md:!w-8/12 -left-5 top-[610px] !w-10/12">
            <img className="box-img-2 lg:pt-10" src={Floating} alt="" />
          </div>
          <div className="container__text-box a-4">
            <h1 className="text-box__header-primary w-7/12 lg:w-full lg:ml-0 ml-auto lg:text-left text-right">
              The All-In-One Card Solution
            </h1>
            <p className="text-box__header-secondary">
              Blank Card is a one-stop-shop for all your payment needs, letting
              you link and unlink your cards with just a few clicks, making it
              easy to switch between different payment methods as you need them.
            </p>
            {/* Modal btn */}
            <button onClick={() => setOpenModal(true)} className="Modal-btn">
              <div className="flex w-full items-center justify-center gap-2">
                <span>Get Onboard</span>
                <span>
                  <img className="rocket" src={Rocket} alt="" />
                </span>
              </div>
            </button>
          </div>

          <div className="lg:w-11/12 w-full">
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
              className="bg-[#ff7043] text-white px-14 text-lg font-semibold md:!text-base rounded-[33px] py-4 lg:static !text-sm lg:!text-lg relative top-32"
              to="/services"
            >
              See More
            </Link>
          </div>
          <div className="flex justify-end w-full">
            <div className="img-box__grid lg:w-11/12 lg:static relative -top-36">
              <div className="box-container">
                <img className="w-[40px] lg:w-[60px]" src={AddCard} alt="" />
                <p className="box-icon__text text-[.5rem] lg:text-[.9rem]">
                  Add Cards
                </p>
              </div>
              <div className="box-container">
                <img
                  className="w-[40px] lg:w-[60px]"
                  src={SuperTransfer}
                  alt=""
                />
                <p className="box-icon__text text-[.5rem] lg:text-[.9rem]">
                  Super Transfer
                </p>
              </div>
              <div className="box-container">
                <img className="w-[40px] lg:w-[60px]" src={BlockCard} alt="" />
                <p className="box-icon__text text-[.5rem] lg:text-[.9rem]">
                  Block Cards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
