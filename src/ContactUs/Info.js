import Nav from "../Home/Nav";
import "./Info.css";
import Map from "../Images/map.svg";
import Call from "../Images/Call.svg";
import Mail from "../Images/Email.svg";

function Info() {
  return (
    <div className="Info">
      <Nav/>
      <div className="Info-box">
        <div className="icon-container">
          <div className="icon-box box-icon-info">
            <img src={Map}  alt="" />
            <h2 className="icon-box-heading">Address</h2>
            <p className="icon-box-p address-p">
              8 Musa Akor Off Akin Oshiyemi street,<br></br> Lagos,Nigeria
            </p>
          </div>
          <div className="icon-box">
            <img src={Call}  alt="" />
            <h2 className="icon-box-heading">Contact</h2>
            <p className="icon-box-p">+234 702 509 9226</p>
          </div>
          <div className="icon-box">
            <img src={Mail} alt="" />
            <h2 className="icon-box-heading">Email</h2>
            <p className="icon-box-p">support@blank.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;

// &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
