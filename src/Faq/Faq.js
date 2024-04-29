import Nav from "../Home/Nav";
import {Link} from "react-router-dom";
import Accordian from "./Accordian";
import Footer from "../Home/Footer";

function Faq() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
  return (
      <div>
          <Nav/>
          <div className="lg:px-20">
              <div className="lg:mt-20 mt-14 min-h-[80dvh]">
                  <div className="mx-8 grid lg:grid-cols-2">
                      <div className="mb-32">
                          <h2 className="font-semibold text-3xl lg:mt-14 lg:text-4xl leading-relaxed mb-6 text-[#0d0c11]">
                              Frequently Asked <br/> Questions
                          </h2>
                          <p className="text-[#3f3d56] lg:text-lg lg:w-[40ch] leading-loose">
                              Find some of the most commonly asked questions and answers. If
                              your question isn't here, feel free to reach out.
                          </p>
                          <Link
                              onClick={scrollToTop}
                              className="bg-[#f07e61] text-white lg:text-lg py-[1rem] px-[3rem] rounded-[33px] font-semibold mt-20 inline-flex"
                              to="/contactus">
                              Contact Us
                          </Link>
                      </div>
                      <div className="FaqMain-accordian">
                          <Accordian/>
                      </div>
                  </div>
              </div>
              <Footer></Footer>
          </div>

      </div>
  );
}

export default Faq;
