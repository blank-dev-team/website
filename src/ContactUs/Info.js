import Nav from "../Home/Nav";
import "./Info.css";
import Map from "../Images/map.svg";
import Call from "../Images/Call.svg";
import Mail from "../Images/Email.svg";

function Info() {
  return (
    <div>
      <Nav/>
      <div className="Info-box px-6 mb-20">
        <div className="grid lg:grid-cols-3 gap-6 mt-10
        [&>div>h2]:text-base [&>div>h2]:text-[#3f3d56]
        lg:mx-40
        [&>div>h2]:font-medium lg:[&>div>h2]:text-xl lg:[&>div>h2]:font-bold [&>div>h2]:my-2 [&>div>h2]:text-center
        [&>div]:p-[1rem] [&>div>img]:h-[24px]
        [&>div>p]:text-sm [&>div>p]:text-center
         [&>div>img]:mx-auto">
          <div className="icon-box">
            <img src={Map}  alt="" />
            <h2>Address</h2>
            <p>
              8 Musa Akor Off Akin Oshiyemi street, Lagos,Nigeria
            </p>
          </div>
          <div className="icon-box">
            <img src={Call}  alt="" />
            <h2>Contact</h2>
            <p><a href="tel:+2347025099226">+234 702 509 9226</a> </p>
          </div>
          <div className="icon-box">
            <img src={Mail} alt="" />
            <h2>Email</h2>
            <p><a href="mailto:support@blank.com">support@blank.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
