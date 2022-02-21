import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Donate from "./pages/Donate";

import MidContents from "./components/midcontents/MidContents";
import DonationProject from "./pages/DonationProject";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/NotFound";

import Info from "./pages/bank/Info";
import BankTransaction from "./pages/bank/BankTransaction";
import BankTransfer from "./pages/bank/BankTransfer";

import VendorInfo from "./pages/vendor/VendorInfo"
import VendorTransfer from "./pages/vendor/VendorTransfer";
import VendorTransaction from "./pages/vendor/VendorTransaction"

import BeneTransfer from "./pages/bene/BeneTransfer";
import BeneTransaction from "./pages/bene/BeneTransaction"
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/midContents" element={<MidContents />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donationProject" element={<DonationProject />} />
          <Route path="/vendorinfo" element={<VendorInfo />} />
          <Route path="/vendortransaction" element={<VendorTransaction />} />
          <Route path="/vendortransfer" element={<VendorTransfer />} />   
          <Route path="/bankinfo" element={<Info />} />
          <Route path="/banktransaction" element={<BankTransaction />} />
          <Route path="/banktransfer" element={<BankTransfer />} />
          <Route path="/benetransaction" element={<BeneTransaction />} />
          <Route path="/benetransfer" element={<BeneTransfer />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
