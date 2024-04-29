import "./Footer.css";
import Phones from "../Images/newPhones.png";
import logo from "../Images/Logo.png";
import Facebook from "../Images/facebook.svg";
import Instagram from "../Images/instagram.svg";
import Twitter from "../Images/twitter.svg";
import Linkedin from "../Images/linkedin.svg";
import {Icon} from "@iconify/react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container onboard">
        <div className="footer-container-container max-w-[600px] lg:max-w-[800px] mx-auto md:rounded-[10px] grid lg:grid-cols-2 !rounded-0">
          <div className="w-11/12 -mt-[75px] hidden lg:block">
            <img className="h-full" src={Phones} alt="" />
          </div>
          <div className="lg:-mt-12">
            <h2 className="footer-text-primary !text-2xl">Ready to Get Started?</h2>
            <h4 className="footer-text-secondary -mt-2 !mb-8 !text-white/70 !text-sm">
              Sign up to get your Blank Card today and get smarter managing your
              cards.
            </h4>
            <form>
              <label className="!w-full relative">
                <span className="sr-only">Email</span>
              <input
                  className="!h-[49px] placeholder:text-sm w-full rounded-md overflow-hidden"
                name="email"
                id="email"
                type="email"
                placeholder="Your Email" />
              <button className="absolute -top-[16px] flex justify-center items-center h-[50px] right-0 px-6">
                <Icon className="text-white text-xl" icon="fa:send" />
              </button>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className="lg:grid-cols-[.5fr,1fr] py-6 px-6 grid gap-6 lg:gap-40 lg:py-10 lg:justify-between border-y lg:px-40 border-[#ffecb3]">
        <div className="footer-links__logo-links">
          <a href="#">
            <img className="logo" src={logo} alt="Blank Technologies"/>
          </a>
          <p className="tagline">The Only Card You'll Ever Need</p>
          <div className="footer-links__logo-links__social-links">
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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <div className="footer-links_logo-links">
          <a href="#">
            <h3 className="footer-links_logo-links__heading">Quick Links</h3>
          </a>
          <a href="#">
            <p className="footer-links_logo-links__secondary">About Us</p>
          </a>
          <a href="#">
            <p className="footer-links_logo-links__secondary">Services</p>
          </a>
        </div>
        <div className="footer-links_logo-links">
          <a href="#">
            <h3 className="footer-links_logo-links__heading">Legal</h3>
          </a>
          <a href="#">
            <p className="footer-links_logo-links__secondary">Privacy Policy</p>
          </a>
          <a href="#">
            <p className="footer-links_logo-links__secondary">Terms Of Use</p>
          </a>
        </div>
        <div className="footer-links_logo-links">
          <a href="#">
            <h3 className="footer-links_logo-links__heading">Help</h3>
          </a>
          <a href="#">
            <p className="footer-links_logo-links__secondary">FAQ</p>
          </a>
          <a href="#">
            <p className="footer-links_logo-links__secondary">Contact Us</p>
          </a>
        </div>
        </div>
      </div>

      <div className="footer-end-container">
        <p className="footer-end">
          Blank Technologies Ltd, registered in Nigeria, #09523903
        </p>
        <p className="footer-end">
          Copyright - 2023 © Blank Tech ltd. The Blank Card, the Blank app and
          everything related is a product of Blank Technologies Limited. Located
          at 8 Musa Akor Off Akin Oshiyemi street Allen Avenue, Lagos
        </p>
      </div>
    </div>
  );
}

export default Footer;
