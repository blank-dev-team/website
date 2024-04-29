import "./Nav.css";
import logo from "../Images/Logo.png";
import { NavLink } from "react-router-dom";
import MobileBar from "../Images/mobileIcon.svg";
import MobileClose from "../Images/mobileClose.svg";
import HeroImg from "../Images/Hero.png";
import { useRef } from "react";

function Nav() {

  const navRef = useRef();
  const navImage = useRef();
  const navCopy = useRef();
  const listRef = useRef();
  const navBtn = useRef();
  const year = new Date().getFullYear();

  const showNavbar = () => {
    navRef.current.classList.toggle("open-nav");
    listRef.current.classList.toggle("nav-list-open");
    navBtn.current.classList.toggle("mobile-close");
    navImage.current.classList.toggle("!block");
    navCopy.current.classList.toggle("!block");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("open-nav");
    listRef.current.classList.remove("nav-list-open");
    navBtn.current.classList.remove("mobile-close");
    navImage.current.classList.remove("!block");
    navCopy.current.classList.remove("!block");
  }

  return (
    <div>
      <div className="header w-full px-6 py-6 lg:py-10 lg:px-24">
        <NavLink to="/">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
        <div ref={navRef} className="main-nav flex lg:items-center">
          <ul ref={listRef} className="main-nav__list hidden lg:flex top-0 mt-14 lg:mt-0 list-none flex lg:gap-[1rem] xl:gap-[2.5rem] [&>li]:pl-8">
            <li>
              <NavLink onClick={hideNavbar} activeClassName="main-nav__link--active" className="main-nav__link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={hideNavbar} activeClassName="main-nav__link--active" className="main-nav__link" to="/about-us">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink onClick={hideNavbar} activeClassName="main-nav__link--active" className="main-nav__link" to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink onClick={hideNavbar} activeClassName="main-nav__link--active" className="main-nav__link" to="/faq">
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink onClick={hideNavbar} activeClassName="main-nav__link--active" className="main-nav__link" to="/contact-us">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <img ref={navImage} className={"block hidden lg:hidden w-10/12 absolute right-[-20%] bottom-20 opacity-10"} src={HeroImg} alt=""/>
          <div ref={navCopy} className="absolute hidden lg:hidden bottom-10 w-full text-center opacity-60 text-sm">Blank Technologies &copy; {year}</div>

          <button onClick={showNavbar} ref={navBtn}
                  className="mobile-button !block lg:!hidden mobile-open absolute top-6 right-6">
            <img className="mobile-open-btn" src={MobileBar} alt=""/>
            <img className="mobile-close-btn" src={MobileClose} alt=""/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
