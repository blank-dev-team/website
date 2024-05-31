import { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SpinnerFullPage from "./Components/SpinnerFullpage";

// import Home from "./Home/Home";
// import AboutUs from "./AboutUs/AboutUs";
// import ContactUs from "./ContactUs/ContactUs";
// import Services from "./Services/Services";
// import Faq from "./Faq/Faq";

// lazy loading components
const Home = lazy(() => import("./Home/Home"));
const AboutUs = lazy(() => import("./AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./ContactUs/ContactUs"));
const Services = lazy(() => import("./Services/Services"));
const Faq = lazy(() => import("./Faq/Faq"));
const PrivacyPolicy = lazy(() => import("../src/Components/PrivacyPolicy"));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route path="/" element={<Home />} render={<Home />} />
            <Route
              path="/about-us"
              element={<AboutUs />}
              render={<AboutUs />}
            />
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
            <Route
              path="/privacypolicy"
              element={<PrivacyPolicy />}
              render={<PrivacyPolicy />}
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
