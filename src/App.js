import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import Services from "./Services/Services";
import Faq from "./Faq/Faq";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} render={<Home />} />
          <Route path="/about-us" element={<AboutUs />} render={<AboutUs />} />
          <Route
            path="/services"
            element={<Services />}
            render={<Services />}
          />
          <Route
            path="/contact-us"
            element={<ContactUs />}
            render={<ContactUs />}
          />
          <Route path="/faq" element={<Faq />} render={<Faq />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
