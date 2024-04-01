import "./Modal.css";
import POPUP from "../Images/popup-img.png";
import LOGO from "../Images/Logo.png";
import CloseButton from "../Images/closeBtn.svg";
import Axios from "axios";
import { useState } from "react";

function Modal({ open, onClose }) {
  // const [message, setMessage] = useState("");

  function alertText() {
    alert("Joined successfully");
  }

  const url = "https://blankcard-dev.up.railway.app/blank/api/v1/waitlist";
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    }).then((res) => {
      console.log(res);
      alertText();
      onClose();
    });
  }

  if (!open) return null;
  return (
    <div className="modalOverlay">
      <div className="modalContainer">
        <div className="modal-Left">
          <div className="modalImg">
            <img className="popup-img" src={POPUP} alt="popup" />
          </div>
        </div>
        <button onClick={onClose} className="closeBtn">
          <img alt="closebutton" src={CloseButton} />
        </button>
        <div className="modal-Right">
          <img src={LOGO} alt={LOGO} className="popup-logo" />
          <h3 className="popup-heading">Please enter your details</h3>
          <form onSubmit={(e) => submit(e)} className="popup-form">
            <div className="name-container">
              <div className="named-container">
                <label id="first-name" className="popup-name-label">
                  First name
                </label>
                <input
                  onChange={(e) => handle(e)}
                  value={data.firstName}
                  id="firstName"
                  type="text"
                  for="first-name"
                  required
                  className="popup-name-input"
                ></input>
              </div>
              <div className="named-container">
                <label id="last-name" className="popup-name-label">
                  Last name
                </label>
                <input
                  onChange={(e) => handle(e)}
                  value={data.lastName}
                  id="lastName"
                  type="text"
                  for="last-name"
                  required
                  className="popup-name-input"
                ></input>
              </div>
            </div>
            <div className="popup-email-div">
              <label id="email" className="popup-name-label">
                Email address
              </label>
              <input
                onChange={(e) => handle(e)}
                value={data.email}
                id="email"
                type="email"
                for="email"
                required
                className="popup-email-input"
              ></input>
            </div>

            <button type="submit" className="popup-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
