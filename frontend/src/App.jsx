import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Dropdown from './components/navbar/Dropdown';
import Home from './components/home/Home';
import Contact from './components/contact/Progress';
import Pricing from './components/pricing/Pricing';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import {Workout} from './components/workout/Workout';
import Profile from './components/Pages/Profile';
import AdminDashboard from './components/Pages/AdminDashboard';
import Payment from './components/Payment/PaymentPage';
import TransactionPage from './components/Payment/TransactionPage';
import ProgressTrackingPage from './components/contact/ProgressTrackingPage'; // Import ProgressTrackingPage

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
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/" element={<Login />} />
        <Route path="/workouts" element={<Workout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/progress" element={<ProgressTrackingPage />} /> {/* Add route for ProgressTrackingPage */}
      </Routes>
    </>
  );
}

export default App;
