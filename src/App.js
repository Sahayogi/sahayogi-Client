import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Projects from "./components/projects/Projects";
import DonationProjects from "./pages/DonationProjects";
import Navbar from "./components/navbar/Navbar";
//  Context API for the data throughout the app
export const DetailContext = React.createContext();

const App = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  return (
    <DetailContext.Provider
      value={{
        // notification,
        // setNotification,
        loginStatus,
        setIsLoginActive,
        setLoginStatus,
      }}
    >
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donationProjects" element={<DonationProjects />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </DetailContext.Provider>
  );
};

export default App;
