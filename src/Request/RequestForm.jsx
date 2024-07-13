import { useState } from "react";
import "../ContactUs/ContactForm.css";

function RequestForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [enquiry, setEnquiry] = useState("closeAccount");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setEmail("");
    setSubject("");
    setEnquiry("");
    setMessage("");
    setIsLoading(true);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="
      contact-form border-y-[#707070] max-w-[640px] lg:border-[#707070] rounded-none lg:round-md lg:rounded-md"
      >
        <div>
          <div className="grid lg:grid-cols-2 gap-4 [&>div>label]:text-sm">
            <div className="label-grid">
              <label id="email">Your Email Address</label>
              <input
                className="name-input outline-none focus:ring focus:ring-red-300 "
                id="email"
                type="text"
                for="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="label-grid">
              <label id="subject">Subject</label>
              <input
                className="name-input outline-none"
                id="lastName"
                type="text"
                for="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
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
              id="enquiry"
              type="enquiry"
              for="enquiry"
              value={enquiry}
              onChange={(e) => setEnquiry(e.target.value)}
              required
            >
              <option value="closeAccount">Close Account</option>
            </select>
          </div>
          <div className="label-grid">
            <label id="message" className="text-sm">
              Message
            </label>
            <textarea
              className="message-input outline-none"
              id="message"
              for="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </div>
        <button className="submit-button" disabled={isLoading}>
          {isLoading === false ? "Send Message" : "...."}
        </button>
        {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
      </form>
    </div>
  );
}

export default RequestForm;
