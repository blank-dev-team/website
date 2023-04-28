import "./Section3.css";
import PaymentImg from "../Images/PaymentImage.png";
import GooglePlay from "../Images/GooglePlay.png";
import AppStore from "../Images/AppStore.png";

function Section3() {
  return (
    <div className="section-3">
      <div className="container grid grid--2-cols u-margin-top">
        <div className="container__img-box-2">
          <img className="img" src={PaymentImg}></img>
        </div>
        <div className="container__text-box">
          <h1 className="text-box__header-primary">
            Secure and Convenient Payment Solutions
          </h1>
          <p className="text-box__header-secondary">
            Blank Card provides a secure and convenient payment solution, with
            an unlink feature that protects your mapped cards in case of loss or
            theft. It is easy to replace, leaving your financial assets intact.
          </p>
          <a className="text-box__img-container" href="#">
            <img className="img-container__img" src={GooglePlay}></img>
            <img className="img-container__img" src={AppStore}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section3;
