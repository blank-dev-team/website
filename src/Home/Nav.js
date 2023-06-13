import "./Nav.css";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import MobileBar from "../Images/mobileIcon.svg";
import MobileClose from "../Images/mobileClose.svg";
import { useRef } from "react";

function Nav() {
  const navRef = useRef();
  const listRef = useRef();
  const navBtn = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("open-nav");
    listRef.current.classList.toggle("nav-list-open");
    navBtn.current.classList.toggle("mobile-close");
  };

  return (
    <div>
      <div className="header">
        <a href="#">
          <img className="logo" src={logo}></img>
        </a>
        <div ref={navRef} className="main-nav">
          <ul ref={listRef} className="main-nav__list ">
            <li>
              <Link className="main-nav__link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="main-nav__link" to="/aboutus">
                About Us
              </Link>
            </li>
            <li>
              <Link className="main-nav__link" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="main-nav__link" to="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="main-nav__link" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={showNavbar}
          ref={navBtn}
          className="mobile-button mobile-open"
        >
          <img className="mobile-open-btn" src={MobileBar}></img>
          <img className="mobile-close-btn" src={MobileClose}></img>
        </button>
      </div>
    </div>
  );
}

export default Nav;
