import { useState } from "react";
import "../ContactUs/ContactForm.css";
import { getEnquires } from "./apiRequest";
import ReCAPTCHA from "react-google-recaptcha";
import Axios from "axios";

// Toast librabry imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Modal toast message
const notify = () => toast("You're Request has been sent");

// Api call for getting the enquires
const enquires = await getEnquires();

// Api url for POST request
const API_REQUEST_URL =
  "https://blankcard-dev.up.railway.app/blank/api/v1/utility/submit-request";

const captchaValidationUrl =
  "https://blankcard-uat.up.railway.app/blank/api/captcha/verify-v2-captcha";

function RequestForm() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    enquiry: "Close Account",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function onCaptchaChange(value) {
    setCaptchaToken(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Ensuring all fields are strings
    const validatedFormData = {
      email: String(formData.email),
      subject: String(formData.subject),
      enquiry: String(formData.enquiry) || "Close Account",
      message: String(formData.message),
    };

    if (!captchaToken) {
      toast.error("Please complete the CAPTCHA.");
      return;
    }

    try {
      // Validate the CAPTCHA
      const validateUrl = `${captchaValidationUrl}?g-recaptcha-response=${captchaToken}`;

      const captchaResponse = await Axios.post(validateUrl);

      if (captchaResponse.data === "v2 CAPTCHA verified") {
        // CAPTCHA is valid, proceed with form submission
        const res = await fetch(API_REQUEST_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(validatedFormData),
        });

        const data = await res.json();

        if (res.status === 200) {
          console.log("Form Submitted successfully", data);
          notify();

          // Reset form fields after successful submission
          setFormData({
            email: "",
            subject: "",
            enquiry: "Close Account",
            message: "",
          });

          // Reset CAPTCHA
          setCaptchaToken(null);
        } else {
          console.log("There has been an error Boss", data);
          toast.error("Submission failed. Please try again.");
        }
      } else {
        toast.error("CAPTCHA verification failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("An error occurred. Please try again later.");
    }
  }

  return (
    <div>
      <ToastContainer theme="dark" />
      <form
        onSubmit={handleSubmit}
        className="
      contact-form border-y-[#707070] max-w-[640px] lg:border-[#707070] rounded-none lg:round-md lg:rounded-md"
      >
        <div>
          <div className="grid lg:grid-cols-2 gap-1  md:gap-4 [&>div>label]:text-sm">
            <div className="label-grid">
              <label id="email">Your Email Address</label>
              <input
                className="name-input outline-none focus:ring focus:ring-red-300 "
                type="text"
                value={formData.email}
                name="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="label-grid">
              <label id="subject">Subject</label>
              <input
                className="name-input outline-none"
                type="text"
                value={formData.subject}
                name="subject"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="label-grid">
            <label id="enquiry" className="text-sm ">
              Nature Of Enquiry
            </label>
            <select
              className="name-input email-input outline-none font-semibold text-[#3f3d56]"
              type="text"
              value={formData.enquiry}
              name="enquiry"
              onChange={handleChange}
              required
            >
              {enquires.map((enquire) => (
                <option value={`${String(enquire)}`}>{enquire}</option>
              ))}
            </select>
          </div>
          <div className="label-grid">
            <label id="message" className="text-sm">
              Message
            </label>
            <textarea
              className="message-input outline-none"
              value={formData.message}
              name="message"
              onChange={handleChange}
              required
            />
            <ReCAPTCHA
              sitekey="6LcqC7EqAAAAACLRocuGFw8R6LdXOZSUWcxvvg04"
              onChange={onCaptchaChange}
            />
          </div>
        </div>
        <button className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

export default RequestForm;
