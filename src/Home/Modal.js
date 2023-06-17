import "./Modal.css";
import POPUP from "../Images/popup-img.png";
import LOGO from "../Images/Logo.png";
import CloseButton from "../Images/closeBtn.svg";
import { useState } from "react";

function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modalOverlay">
      <div className="modalContainer">
        <div className="modal-Left">
          <div className="modalImg">
            <img className="popup-img" src={POPUP}></img>
          </div>
        </div>
        <button onClick={onClose} className="closeBtn">
          <img src={CloseButton} />
        </button>
        <div className="modal-Right">
          <img src={LOGO} className="popup-logo"></img>
          <h1 className="popup-heading">Please enter your details</h1>
          <form className="popup-form">
            <div className="popup-label-container">
              <label id="first-name" className="popup-name-label">
                First name
              </label>
              <label id="last-name" className="popup-name-label">
                Last name
              </label>
            </div>
            <div className="popup-input-container">
              <input
                type="text"
                for="first-name"
                className="popup-name-input"
              ></input>
              <input
                type="text"
                for="last-name"
                className="popup-name-input"
              ></input>
            </div>
            <div className="popup-email-div">
              <label id="email" className="popup-name-label">
                Email address
              </label>
              <input for="email" className="popup-email-input"></input>
            </div>

            <button className="popup-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

<div id="popup1" className="popup">
  <div className="popup-content">
    <div className="popup-left">
      <img src={POPUP}></img>
    </div>
    <div className="popup-right">
      <img src={LOGO} className="popup-logo"></img>
      <h1 className="popup-heading">Please enter your details</h1>
      <form className="popup-form">
        <div className="popup-label-container">
          <label id="first-name" className="popup-name-label">
            First name
          </label>
          <label id="last-name" className="popup-name-label">
            Last name
          </label>
        </div>
        <div className="popup-input-container">
          <input
            type="text"
            for="first-name"
            className="popup-name-input"
          ></input>
          <input
            type="text"
            for="last-name"
            className="popup-name-input"
          ></input>
        </div>
        <div className="popup-email-div">
          <label id="email" className="popup-name-label">
            Email address
          </label>
          <input for="email" className="popup-email-input"></input>
        </div>

        <button className="popup-submit">Submit</button>
      </form>
    </div>
  </div>
</div>;

export default Modal;
