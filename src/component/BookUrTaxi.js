import React, { useState } from "react";
import { useLocation } from "react-router-dom"; 
import "./bookurtaxi.css";
import bg from "../image/page-title.png";
import { Link } from "react-router-dom";

const BookUrTaxi = () => {
  const [selectedType, setSelectedType] = useState("single");
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
      {/* Background Banner */}
      <div className="taxi-banner">
        <img src={bg} alt="Background" className="taxi-banner-img" />
        <div className="taxi-overlay">
          <h1 className="taxi-title">Booking</h1>
          <p className="taxi-breadcrumb">
            <a href="/">Home</a> &gt; <a href="/">Booking</a>
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="taxi-form">
        <h1 className="taxi-form-title">Book Your Taxi Ride!</h1>
        <p className="taxi-form-subtitle">
          To get the ride of your taxi, please select from the following:
        </p>

        <div className="taxi-input-group">
          <input type="text" value={model || ""} className="taxi-input" readOnly />
        </div>

        <div className="taxi-input-group">
          <input type="text" placeholder="Start Destination" className="taxi-input" />
          <input type="text" placeholder="End Destination" className="taxi-input" />
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
          <input type="text"  placeholder="Amount" className="taxi-input" value={amount || ""} readOnly />
        </div>

        <div className="taxi-radio-group">
          <button
            className={`taxi-radio-btn ${selectedType === "single" ? "active" : ""}`}
            onClick={() => setSelectedType("single")}
          >
            Single
          </button>
          <button
            className={`taxi-radio-btn ${selectedType === "family" ? "active" : ""}`}
            onClick={() => setSelectedType("family")}
          >
            Family
          </button>
        </div>

        <div className="taxi-input-group">
          <input type="text" placeholder="Complete Name" className="taxi-input" />
          <input type="email" placeholder="Email Address" className="taxi-input" />
        </div>

        <div className="taxi-input-group">
          <input type="tel" placeholder="Phone No" className="taxi-input" />
        </div>
        <Link to={'/payment'}>
        <button className="taxi-submit-btn">Book a Car</button>
        </Link>
      </div>

      <div className="cab-booking-container">
      <div className="cab-booking-content">
        <div className="cab-info">
          <p className="cab-subtitle">LONG ESTABLISHED FACT THAT A READER</p>
          <h2 className="cab-title">BOOK YOUR CAB IT'S SIMPLE AND AFFORDABLE</h2>
        </div>
        <div className="cab-contact">
          <div className="cab-call">
            <p className="cab-phone-text">📱 CALL FOR TAXI</p>
            <p className="cab-phone-number">5267-214-392</p>
          </div>
          <button className="cab-book-btn">Book your cab</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default BookUrTaxi;
