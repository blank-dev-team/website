import "./CookingModal.css";

import CloseButton from "../Images/closeBtn.svg";
import Axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

import ReCAPTCHA from "react-google-recaptcha";

function CookingModal({ open, onClose, notify }) {
  let url = "https://blankcard-uat.up.railway.app/blank/api/v1/waitlist";
  const captchaValidationUrl =
    "https://blankcard-uat.up.railway.app/blank/api/captcha/verify-v2-captcha";

  const [captchaToken, setCaptchaToken] = useState(null);

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
  );
}

export default CookingModal;
