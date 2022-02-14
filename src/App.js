import React, { useState } from "react";
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
import { Provider as AuthProvider } from "./context/UserContext";
import Vendor from "./pages/Vendor"
import Beneficiary from "./pages/Beneficiary"
import Bank from "./pages/Bank"


const App = () => {

  return (
    <AuthProvider>
      
        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/midContents" element={<MidContents />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/donationProject" element={<DonationProject />} />
              <Route path="/vendor" element={<Vendor />} />
              <Route path="/beneficiary" element={<Beneficiary />} />
              <Route path="/bank" element={<Bank />} />              
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
     
    </AuthProvider>
  );
};

export default App;
