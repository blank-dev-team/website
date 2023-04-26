import "./Nav.css";
import logo from "../Images/Logo.png";

function Nav() {
  return (
    <div>
      <div className="header">
        <a href="#">
          <img className="logo" src={logo}></img>
        </a>
        <div className="main-nav">
          <ul className="main-nav__list">
            <li>
              <a className="main-nav__link">Home</a>
            </li>
            <li>
              <a className="main-nav__link">About Us</a>
            </li>
            <li>
              <a className="main-nav__link">Services</a>
            </li>
            <li>
              <a className="main-nav__link">FAQ</a>
            </li>
            <li>
              <a className="main-nav__link">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
