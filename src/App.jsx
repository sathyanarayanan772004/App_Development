import React, { useState } from "react";
import { Routes, Route, useLocation, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dropdown from "./components/navbar/Dropdown";
import Home from "./components/home/Home";
import Contact from "./components/contact/Progress";
import Pricing from "./components/pricing/Pricing";
import ScrollToTop from "./components/scrollToTop";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Workout } from "./components/workout/Workout";
import Profile from "./components/Pages/Profile";
import AdminDashboard from "./components/Pages/AdminDashboard";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const noNavBarRoutes = ["/admin-dashboard"];

  return (
    <>
      {noNavBarRoutes.indexOf(location.pathname) === -1 && (
        <>
          <Navbar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
        </>
      )}
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/workouts" element={<Workout />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/admin-dashboard" element={<AdminDashboard/>} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default App;
