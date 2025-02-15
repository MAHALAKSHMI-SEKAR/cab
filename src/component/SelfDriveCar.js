import React, { useState } from "react";
import "./bookurtaxi.css";
import bg from "../image/page-title.png";
import { Link } from "react-router-dom";

const SelfDriveCar = () => {
  const [rentalDuration, setRentalDuration] = useState("1 day");

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
          <select className="taxi-select">
            <option disabled selected hidden>Choose Car Type</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Convertible</option>
            <option>Luxury</option>
          </select>
        </div>

        <div className="taxi-input-group">
          <input type="text" placeholder="Pickup Location" className="taxi-input" />
          <input type="text" placeholder="Drop-off Location" className="taxi-input" />
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
