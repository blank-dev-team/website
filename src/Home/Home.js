import "./Home.css";
import Hero from "./Hero";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Footer from "./Footer";

// Toast librabry imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Modal toast message
const notify = () => toast("Recieved! You have been added to the waitlist");

function Home() {
  return (
    <div className="home">
      <Hero notify={notify} />
      <Section2 notify={notify} />
      <Section3 notify={notify} />
      <Section4 notify={notify} />
      <Footer />
      <ToastContainer theme="dark" />
    </div>
  );
}

export default Home;
