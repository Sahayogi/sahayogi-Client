import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Donate from "./pages/Donate";
import MidContents from "./components/midcontents/MidContents";
import DonationProject from "./pages/DonationProject";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/NotFound";
import { Provider as AuthProvider } from "./context/UserContext";

//  Context API for the data throughout the app
export const DetailContext = React.createContext();

const App = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  return (
    <AuthProvider>
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
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/midContents" element={<MidContents />} />

              <Route path="/donate" element={<Donate />} />
              <Route path="/donationProject" element={<DonationProject />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </DetailContext.Provider>
    </AuthProvider>
  );
};

export default App;
