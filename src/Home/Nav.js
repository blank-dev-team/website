import "./Nav.css";
import logo from "../Images/Logo.png";
import { NavLink } from "react-router-dom";
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
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div ref={navRef} className="main-nav">
          <ul ref={listRef} className="main-nav__list ">
            <li>
              <NavLink className="main-nav__link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="main-nav__link" to="/aboutus">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="main-nav__link" to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className="main-nav__link" to="/faq">
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink className="main-nav__link" to="/contactus">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <button
          onClick={showNavbar}
          ref={navBtn}
          className="mobile-button mobile-open"
        >
          <img className="mobile-open-btn" src={MobileBar} alt="" />
          <img className="mobile-close-btn" src={MobileClose} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Nav;
