import React, { useState } from "react";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

import "./ContactForm.css";
import Facebook from "../Images/facebook.svg";
import Instagram from "../Images/instagram.svg";
import Twitter from "../Images/twitter.svg";
import Linkedin from "../Images/linkedin.svg";

function ContactForm() {
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState(null);

  const notify = () => toast("We'll get back to you soon!");
  const url =
    "https://blankcard-uat.up.railway.app/blank/api/v1/utility/contact-us";
  const captchaValidationUrl =
    "https://blankcard-uat.up.railway.app/blank/api/captcha/verify-v2-captcha";

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

  return (
    <div className="form">
      {/* <ToastContainer theme="dark" /> */}
      <div className="px-4 text-center">
        <h2 className="font-semibold text-lg lg:text-2xl text-[#3f3d56] mb-2">
          Get in Touch
        </h2>
        <p className="text-sm lg:text-base max-w-[47ch] mx-auto mb-6">
          Feel free to reach out to us on our various platforms, or send us a
          message by filling the form below.
        </p>
        <div className="">
          <div className="icons">
            <a href="#">
              <img src={Facebook} alt="" />
            </a>
            <a href="https://x.com/blankapp_ng" target="_blank">
              <img src={Twitter} alt="" />
            </a>
            <a href="#">
              <img src={Linkedin} alt="" />
            </a>
            <a href="https://www.instagram.com/blankapp_ng" target="_blank">
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
      </div>

      <form
        onSubmit={(e) => submit(e)}
        className="contact-form border-y-[#707070] max-w-[640px] lg:border-[#707070] rounded-none lg:round-md lg:rounded-md"
      >
        <div>
          <div className="grid lg:grid-cols-2 gap-4 [&>div>label]:text-sm">
            <div className="label-grid">
              <label id="first-name">First Name</label>
              <input
                className="name-input outline-none"
                onChange={(e) => handle(e)}
                value={data.firstName}
                id="firstName"
                type="text"
                for="first-name"
                required
              />
            </div>
            <div className="label-grid">
              <label id="last-name">Last Name</label>
              <input
                className="name-input outline-none"
                onChange={(e) => handle(e)}
                value={data.lastName}
                id="lastName"
                type="text"
                for="last-name"
                required
              />
            </div>
          </div>
          <div className="label-grid">
            <label id="email" className="text-sm">
              Email
            </label>
            <input
              className="name-input email-input outline-none"
              onChange={(e) => handle(e)}
              value={data.email}
              id="email"
              type="email"
              for="email"
              required
            />
          </div>
          <div className="label-grid">
            <label id="message" className="text-sm">
              Message
            </label>
            <textarea
              className="message-input outline-none"
              onChange={(e) => handle(e)}
              value={data.message}
              id="message"
              for="message"
              required
            />
          </div>
        </div>
        <ReCAPTCHA
          sitekey="6LcqC7EqAAAAACLRocuGFw8R6LdXOZSUWcxvvg04"
          onChange={onCaptchaChange}
        />
        <button className="submit-button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
