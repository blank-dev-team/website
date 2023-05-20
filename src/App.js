import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} render={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} render={<AboutUs />} />
          <Route
            path="/contactus"
            element={<ContactUs />}
            render={<ContactUs />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
