import React from "react";
import { useNavigate } from "react-router-dom";
import "../membership/membership.css";
import Footer from "../footer/Footer";

const Pricing = () => {
  const navigate = useNavigate();

  const handlePlanSelection = (plan) => {
    navigate("/payment", { state: { selectedPlan: plan } });
  };

  return (
    <section id="membership">
      <div className="membership-container">
        <h1>
          Better The Diet - <span>Better The Physique</span>
        </h1>
        <h2 className="plans-h2">Diet plans</h2>

        <div className="membership-cards">
          <div className="membership-card" onClick={() => handlePlanSelection("Beginner")}>
            <p className="price">Beginner</p>
            <p className="per_month">carbohydrate rich food</p>
            <ul>
              <li>2000 calories</li>
              <li>1.5g protein x bw</li>
              <li>green vegetables</li>
            </ul>
            <button className="choose-plan-button" onClick={() => handlePlanSelection("Beginner")}>
              Choose Plan
            </button>
          </div>

          <div className="membership-card-strike" onClick={() => handlePlanSelection("Moderate")}>
            <p className="price">Moderate</p>
            <p className="per_month">Balanced diet</p>
            <ul>
              <li>2000 calories</li>
              <li>1.5g protein x bw</li>
              <li>omega3 fats</li>
              <li>fibre rich food</li>
              <li>vitamin d rich food</li>
              <li>moderate oil</li>
            </ul>
            <button className="choose-plan-button" onClick={() => handlePlanSelection("Moderate")}>
              Choose Plan
            </button>
          </div>

          <div className="membership-card" onClick={() => handlePlanSelection("Pro")}>
            <p className="price">Pro</p>
            <p className="per_month">high protein</p>
            <ul>
              <li>2g protein x wt</li>
              <li>1500 calories</li>
              <li>3x vegetables a day</li>
              <li>low fats</li>
              <li>water rich fruits</li>
            </ul>
            <button className="choose-plan-button" onClick={() => handlePlanSelection("Pro")}>
              Choose Plan
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Pricing;
