import "./CookingModal.css";

import CloseButton from "../Images/closeBtn.svg";
import Axios from "axios";
import { useState } from "react";

function CookingModal({ open, onClose, notify }) {
  let url = "https://blankcard-uat.up.railway.app/blank/api/v1/waitlist";
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    }).then((res) => {
      // This Resets form fields after successful submission
      setData({
        firstName: "",
        lastName: "",
        email: "",
      });
      notify();

      onClose();
    });
  }

  if (!open) return null;
  return (
    <div className="modalOverlay">
      <div className="CookingModalContainer text-md">
        <button onClick={onClose} className="closeBtn">
          <img alt="closebutton" src={CloseButton} />
        </button>
        <h1 className="cooking-header">We're Still Cooking</h1>
        <h3 className="cooking-secondary">
          Our app isn't live yet, but it will soon be. In the meantime, you can
          enter your email below and get notified when we launch!
        </h3>
        {/* form */}
        <form
          onSubmit={(e) => submit(e)}
          className="p-6 pb-6 text-sm lg:p-6 md:text-2xl lg:pb-10 grid gap-2 lg:text-2xl lg:text-left"
        >
          <div className="name-container grid gap-2 lg:grid-cols-2">
            <div className="named-container">
              <label id="first-name" className="popup-name-label text-md">
                First name
              </label>
              <input
                onChange={(e) => handle(e)}
                value={data.firstName}
                id="firstName"
                type="text"
                for="first-name"
                required
                className="popup-name-input outline-none"
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
                className="popup-name-input outline-none"
              ></input>
            </div>
          </div>
          <div className="popup-email-div">
            <label id="email" className="popup-name-label ">
              Email address
            </label>
            <input
              onChange={(e) => handle(e)}
              value={data.email}
              id="email"
              type="email"
              for="email"
              required
              className="popup-email-input outline-none"
            ></input>
          </div>

          <button type="submit" className="popup-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CookingModal;
