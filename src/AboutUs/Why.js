import "./Why.css";
import Phone2 from "../Images/Phone2.png";
import SuperFast from "../Images/SuperFast.png";

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
                Transactions are carried out with ease and lightening speed.
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
                The App has everything. From bills, to airtime, wallet and much
                more.
              </p>
            </div>
            <div className="container-img">
              <img className="container-img-img" src={SuperFast} />
            </div>
          </div>
          <div className="text-choose-container-3">
            <div className="container-text">
              <h1>Data Transparency</h1>
              <p>
                We don't store user sensitive data. Your financial information
                is safe.
              </p>
            </div>
            <div className="container-img">
              <img className="container-img-img" src={SuperFast} />
            </div>
          </div>
        </div>
        <div>
          <img className="phoneimg" src={Phone2} />
        </div>
        <div>hello</div>
      </div>
    </div>
  );
}

export default Why;
