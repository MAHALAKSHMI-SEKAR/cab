import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./bookurtaxi.css";
import bg from "../image/page-title.png";
import { Link } from "react-router-dom";

const SelfDriveCar = () => {
  const [rentalDuration, setRentalDuration] = useState("1 day");
  const location = useLocation();
  const { model, selectedPlan, amount } = location.state || {};
  const getPlanDetails = (plan) => {
    if (plan === "8 hr") {
      return "You get 288 km free. After 8 hours, an additional charge of ₹8 per km will apply.";
    } else if (plan === "24 hr") {
      return "You get 349 km free. After 24 hours, an additional charge of ₹8 per km will apply.";
    }else if(plan === 'Infinity'){
      return "You get unlimited kilometers for the selected duration with no additional charges.";
    }
    return "";
  };

  return (
    <>
      <div className="taxi-banner">
        <img src={bg} alt="Background" className="taxi-banner-img" />
        <div className="taxi-overlay">
          <h1 className="taxi-title">Self Drive Car</h1>
          <p className="taxi-breadcrumb">
            <a href="/">Home</a> &gt;<a href="/">Self Drive Car</a>
          </p>
        </div>
      </div>

      <div className="taxi-form">
        <h1 className="taxi-form-title">Book Your Self Drive Car!</h1>

        <div className="taxi-input-group">
          <input type="text" value={model || ""} className="taxi-input" readOnly />
        </div>

        <div className="taxi-input-group">
          <input type="text" placeholder="Pickup Location" className="taxi-input" />
          <input type="text" placeholder="Drop-off Location" className="taxi-input" />
        </div>

        <div className="taxi-input-group">
          <select className="taxi-select" disabled>
            <option>{selectedPlan || "Choose Your Plan"}</option>
          </select>
        </div>

        {selectedPlan === "8 hr" || selectedPlan === "24 hr" ? (
          <div className="taxi-input-group">
            <input
              type="text"
              className="taxi-input"
              value={getPlanDetails(selectedPlan)}
              readOnly
            />
          </div>
        ) : null}

        <div className="taxi-input-group">
          <input type="file" placeholder="file" className="taxi-input" />
        </div>
        <div className="taxi-input-group">
          <input type="text" placeholder="Amount" className="taxi-input" value={amount || ""} readOnly />
        </div>

        <div className="taxi-input-group">
          <input type="date" className="taxi-input" />
          <select className="taxi-select" onChange={(e) => setRentalDuration(e.target.value)}>
            <option>1 day</option>
            <option>2 days</option>
            <option>1 week</option>
            <option>1 month</option>
          </select>
        </div>

        <Link to={'/payment'}>
          <button className="taxi-submit-btn">Book a Car</button>
        </Link>
      </div>
    </>
  );
};

export default SelfDriveCar;
