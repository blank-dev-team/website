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
    <div className="why-container px-4">
      <div className="text-content lg:mt-28">
        <h2 className="text-center text-[#0d0c11] text-2xl lg:text-4xl font-semibold mb-4">Why Choose Blank</h2>

        <p className="text-center text-sm lg:text-base lg:max-w-[65ch] lg:mx-auto">
          Do you dread the thought of having to switch between apps just to make
          a purchase? Here are some reasons why Blank is the only app you need
          to keep your finances on track.
        </p>
      </div>
      <div className="px-4 lg:mt-16 mt-10 grid gap-6 lg:grid-cols-3">
        <div className="!justify-left grid gap-6
        [&>div]:grid [&>div]:grid-cols-[50px,1fr] lg:[&>div]:grid-cols-[1fr,50px] [&>div]:gap-y-2 [&>div]:items-center
        [&>div>img]:!w-[30px] lg:[&>div>img]:!w-[40px]
        [&>div>h3]:text-left [&>div>h3]:text-[#0d0c11] [&>div>h3]:font-semibold lg:[&>div>h3]:text-right
        lg:[&>div>h3]:text-center lg:[&>div>h3]:text-[1.4rem]
        [&>div>p]:text-sm [&>div>p]:col-span-2 lg:[&>div>p]:text-[1rem] lg:[&>div>p]:text-right [&>div>p]:text-left
        [&>div>p>br]:hidden [&>div>p>br]:lg:block
        lg:[&>div>p]:-mt-10
        lg:[&>div>img]:order-2 lg:[&>div]:gap-x-4 lg:[&>div]:gap-y-1 lg:[&>div>h3]:order-1 lg:[&>div>p]:order-3">
          <div className="">
              <img className="" src={SuperFast} alt="blank Super Fast"/>
              <h3 className="">Super Fast</h3>
              <p className="">
                Transactions are carried out with<br /> ease and lightening
                speed.
              </p>
          </div>
          <div className="lg:mr-10">
              <img className="" src={AllOne} alt="Blank All in One"/>
              <h3 className="">All-in-One</h3>
              <p>
                The App has everything. From bills,<br/> to airtime, wallet
                and much more.
              </p>
          </div>
          <div>
            <img src={DataTransparency}
                 alt="blank Data Transparency"/>
            <h3>Data Transparency</h3>
            <p>
              We don't store user sensitive data.<br/> Your financial
              information is safe.
            </p>
        </div>
      </div>
      <div className="w-[18rem] !hidden lg:!block mx-auto"><img className="phoneimg" src={Phone2} alt="" /></div>
        <div className="!justify-left grid gap-6
        [&>div]:grid [&>div]:grid-cols-[50px,1fr] lg:[&>div]:grid-cols-[50px,1fr] [&>div]:gap-y-2 [&>div]:items-center
        [&>div>img]:!w-[30px] lg:[&>div>img]:!w-[40px]
        [&>div>h3]:text-left [&>div>h3]:text-[#0d0c11] [&>div>h3]:font-semibold
        lg:[&>div>h3]:!text-left lg:[&>div>h3]:text-[1.4rem] lg:[&>div>h3]:text-center lg:[&>div>p]:-mt-10
        [&>div>p]:text-sm [&>div>p]:col-span-2 lg:[&>div>p]:text-[1rem] lg:[&>div>p]:text-left [&>div>p]:text-left
        [&>div>p>br]:hidden [&>div>p>br]:lg:block
         lg:[&>div]:gap-x-4 lg:[&>div]:gap-y-1
        ">
          <div className="text-choose-container-4">
              <img className="container-img-img-2 !w-[30px] lg:!w-[40px]" src={Secure} alt="Blank Secure" />
              <h3>Very Secure</h3>
              <p>
                Security protocols protect all<br></br> transactions on the app.
              </p>
          </div>
          <div className="lg:ml-10">
              <img className="" src={Easy} alt="Blank Easy" />
              <h3>Easy to Use</h3>
              <p>
                The Blank app is very simple to use,<br></br> interface is
                sleek.
              </p>
          </div>
          <div>
              <img className="" src={Subscription}  alt="Blank Subscription"/>
              <h3>No Subscription</h3>
              <p>
                You don't have to pay a monthly<br></br> subscription. Just
                order the card.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
