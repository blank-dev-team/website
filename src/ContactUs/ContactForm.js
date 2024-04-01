// import { Form } from "react-router-dom";
import "./ContactForm.css";
import Facebook from "../Images/facebook.svg";
import Instagram from "../Images/instagram.svg";
import Twitter from "../Images/twitter.svg";
import Linkedin from "../Images/linkedin.svg";
import Axios from "axios";
import { useState } from "react";

function ContactForm() {
  const [message] = useState("");

  const url =
    "https://blankcard-dev.up.railway.app/blank/api/v1/utility/contact-us";
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
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
      message: data.message,
    }).then((res) => {
      console.log(res);
      alert("We'll get back to you");
    });
  }

  return (
    <div className="form">
      <div className="text-heading">
        <h2>Get in Touch</h2>
        <p>
          Feel free to reach out to us on our various platforms, or send us a
          message by<br></br> filling the form below.
        </p>
        <div className="icon-heading">
          <div className="icons">
            <a href="#">
              <img src={Facebook}  alt="" />
            </a>
            <a href="#">
              <img src={Twitter}  alt="" />
            </a>
            <a href="#">
              <img src={Linkedin}  alt="" />
            </a>
            <a href="#">
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
      </div>

      <form onSubmit={(e) => submit(e)} className="contact-form">
        <div className="contact-from-container">
          <div className="name-grid">
            <div className="label-grid">
              <label id="first-name">First Name</label>

              <input
                className="name-input"
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
                className="name-input"
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
            <label id="email">Email</label>
            <input
              className="name-input email-input"
              onChange={(e) => handle(e)}
              value={data.email}
              id="email"
              type="email"
              for="email"
              required
            />
          </div>
          <div className="label-grid">
            <label id="message">Message</label>
            <textarea
              className="message-input"
              onChange={(e) => handle(e)}
              value={data.message}
              id="message"
              for="message"
              required
            />
          </div>
        </div>
        <button className="submit-button" type="submit">
          Send Message
        </button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default ContactForm;

// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [email, setEmail] = useState("");
// const [message, setMessage] = useState("");

// let handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     let res = await fetch(
//       "https://blank-card-dev.herokuapp.com/blank/api/v1/waitlist",
//       {
//         method: "POST",
//         body: JSON.stringify({
//           email: email,
//           firstName: firstName,
//           lastName: lastName,
//         }),
//       }
//     );

//     if (res.status === 200) {
//       setFirstName("");
//       setLastName("");
//       setEmail("");
//       setMessage("We'll be in touch soon.");
//     } else {
//       setMessage("Error occured");
//       console.log(email);
//     }
//   } catch (err) {
//     console.log(err);
//     // console.log(res);
//   }
// };
