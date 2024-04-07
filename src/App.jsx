import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.css";
import "./style/media.css";

import Home from "./components/Home";
import About from "./components/About";
import Management from "./components/service/Management";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import DigitalMarketing from "./components/service/DigitalMarketing";
import WebsiteDevelopment from './components/service/WebsiteDevelopment';

const App = () => {
  return (
    <>
      {/* <Router> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
        <Route path="/revenuemanagement" element={<Management />}></Route>
        <Route
          path="/digital-marketing-agency"
          element={<DigitalMarketing />}
        ></Route>
        <Route
          path="/website-development"
          element={<WebsiteDevelopment />}
        ></Route>
      </Routes>
      {/* <Home /> */}
      <Footer />
      {/* </Router> */}
    </>
  );
};

export default App;
