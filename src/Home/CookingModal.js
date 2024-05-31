import "./CookingModal.css";

// Toast librabry imports
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import CloseButton from "../Images/closeBtn.svg";
import Axios from "axios";
import { useState } from "react";

function CookingModal({ open, onClose, notify }) {
  // const [message, setMessage] = useState("");

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
      notify();
      // setTimeout(onClose, 6000);
      onClose();
    });
  }

  if (!open) return null;
  return (
    <div className="modalOverlay">
      <div className="CookingModalContainer">
        <button onClick={onClose} className="closeBtn">
          <img alt="closebutton" src={CloseButton} />
        </button>
        <h1 className="cooking-header">We're Still Cooking</h1>
        <h3 className="cooking-secondary">
          Our app isn't live yet, but it will soon be. In the meantime, you can
          enter your email below and get notified when we launch!
        </h3>
        {/* form */}
        <form onSubmit={(e) => submit(e)} className="">
          <div className="Cookingname-container">
            <div className="cooking-name-contained">
              <label id="first-name" className="cooking-name-label">
                First name
              </label>
              <input
                onChange={(e) => handle(e)}
                value={data.firstName}
                id="firstName"
                type="text"
                for="first-name"
                required
                className="cooking-name-input"
              ></input>
            </div>
            <div className="cooking-name-contained">
              <label id="last-name" className="cooking-name-label">
                Last name
              </label>
              <input
                onChange={(e) => handle(e)}
                value={data.lastName}
                id="lastName"
                type="text"
                for="last-name"
                required
                className="cooking-name-input"
              ></input>
            </div>
          </div>
          <div className="cooking-email-div">
            <label id="email" className="cooking-email-label">
              Email address
            </label>
            <input
              onChange={(e) => handle(e)}
              value={data.email}
              id="email"
              type="email"
              for="email"
              required
              className="cooking-email-input"
            ></input>
          </div>

          <button type="submit" className="cooking-submit ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CookingModal;
