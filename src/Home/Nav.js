import "./Nav.css";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";

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
              <Link className="main-nav__link">FAQ</Link>
            </li>
            <li>
              <Link className="main-nav__link" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
