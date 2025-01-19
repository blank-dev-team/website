import "./Modal.css";
import POPUP from "../Images/popup-img.png";
import LOGO from "../Images/Logo.png";
import CloseButton from "../Images/closeBtn.svg";
import Axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

// Toast librabry imports
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function Modal({ open, onClose, notify }) {
  const [captchaToken, setCaptchaToken] = useState(null);

  let url = "https://blankcard-uat.up.railway.app/blank/api/v1/waitlist";
  const captchaValidationUrl =
    "https://blankcard-uat.up.railway.app/blank/api/captcha/verify-v2-captcha";

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

  function onCaptchaChange(value) {
    setCaptchaToken(value);
  }

  async function submit(e) {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please complete the CAPTCHA.");
      return;
    }

    try {
      // Validate the CAPTCHA
      const validateUrl = `${captchaValidationUrl}?g-recaptcha-response=${captchaToken}`;
      // console.log(validateUrl);

      const captchaResponse = await Axios.post(validateUrl);
      // console.log(captchaResponse);

      if (captchaResponse.data === "v2 CAPTCHA verified") {
        // Submit the form data
        await Axios.post(url, {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          message: data.message,
        });

        // Reset form fields and CAPTCHA token
        setData({
          email: "",
          firstName: "",
          lastName: "",
          message: "",
        });
        setCaptchaToken(null);
        notify();
        // toast.success("We'll get back to you soon!");
      } else {
        toast.error("CAPTCHA validation failed. Please try again.");
        // console.log(captchaResponse);

        // console.log(captchaToken);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("An error occurred while submitting the form.");
    }
  }

  if (!open) return null;
  return (
    <div className="modalOverlay">
      {/* <ToastContainer theme="dark" /> */}
      <div className="modalContainer grid lg:grid-cols-[1fr,1.5fr] w-11/12 lg:w-[750px]">
        <div className="modal-Left hidden lg:block">
          <div className="modalImg">
            <img className="popup-img" src={POPUP} alt="popup" />
          </div>
        </div>
        <button onClick={onClose} className="closeBtn  top-[-3rem] right-0">
          <img alt="closebutton" src={CloseButton} />
        </button>
        <div className="py-3 px-4">
          <img src={LOGO} alt={LOGO} className="popup-logo" />
          <h3 className="popup-heading mb-4">Please enter your details</h3>
          <form
            onSubmit={(e) => submit(e)}
            className="p-2 pb-6 lg:p-6 lg:pb-10 grid gap-2"
          >
            <div className="name-container grid gap-2 lg:grid-cols-2">
              <div className="named-container">
                <label id="first-name" className="popup-name-label text-sm">
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
                <label id="last-name" className="popup-name-label text-sm">
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
              <label id="email" className="popup-name-label text-sm">
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
              <ReCAPTCHA
                sitekey="6LcqC7EqAAAAACLRocuGFw8R6LdXOZSUWcxvvg04"
                onChange={onCaptchaChange}
              />
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
