import "./Why.css";
import Phone2 from "../Images/newPhone2.png";
import SuperFast from "../Images/SuperFast.png";
import AllOne from "../Images/AllOne.png";
import DataTransparency from "../Images/DataTrans.png";
import Secure from "../Images/Secure.png";
import Easy from "../Images/Easy.png";
import Subscription from "../Images/Sub.png";

function Why() {
  return (
    <div className="why-container">
      <div className="text-content">
        <h1>Why Choose Blank</h1>
        <p className="text-stuff">
          Do you dread the thought of having to switch between apps just to make
          a purchase? Here are some reasons why Blank is the only app you need
          to keep your finances on track.
        </p>
      </div>
      <div className="content-container">
        <div className="grid-1">
          <div className="text-choose-container-1">
            <div className="container-text">
              <h1>Super Fast</h1>
              <p>
                Transactions are carried out with<br></br> ease and lightening
                speed.
              </p>
            </div>
            <div className="container-img">
              <img className="container-img-img" src={SuperFast} />
            </div>
          </div>
          <div className="text-choose-container-2">
            <div className="container-text">
              <h1>All-in-One</h1>
              <p>
                The App has everything. From bills,<br></br> to airtime, wallet
                and much more.
              </p>
            </div>
            <div className="container-img">
              <img className="container-img-img" src={AllOne} />
            </div>
          </div>
          <div className="text-choose-container-3">
            <div className="container-text">
              <h1>Data Transparency</h1>
              <p>
                We don't store user sensitive data.<br></br> Your financial
                information is safe.
              </p>
            </div>
            <div className="container-img">
              <img className="container-img-img" src={DataTransparency} />
            </div>
          </div>
        </div>
        <div className="grid-phone">
          <img className="phoneimg" src={Phone2} />
        </div>
        <div className="grid-3">
          <div className="text-choose-container-4">
            <div className="container-img-2">
              <img className="container-img-img-2" src={Secure} />
            </div>
            <div className="container-text-2">
              <h1>Very Secure</h1>
              <p>
                Security protocols protect all<br></br> transactions on the app.
              </p>
            </div>
          </div>
          <div className="text-choose-container-5">
            <div className="container-img-2">
              <img className="container-img-img-2" src={Easy} />
            </div>
            <div className="container-text-2">
              <h1>Easy to Use</h1>
              <p>
                The Blank app is very simple to use,<br></br> interface is
                sleek.
              </p>
            </div>
          </div>
          <div className="text-choose-container-6">
            <div className="container-img-2">
              <img className="container-img-img-2" src={Subscription} />
            </div>
            <div className="container-text-2">
              <h1>No Subscription</h1>
              <p>
                You don't have to pay a monthly<br></br> subscription. Just
                order the card.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
