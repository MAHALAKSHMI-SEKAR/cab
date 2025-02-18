import React from "react";
import "./bookurtaxi.css";
import bg from "../image/page-title.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SelfDriveBike = () => {
  const location = useLocation();
  const { model, selectedPlan, amount } = location.state || {};
  return (
    <>
      <div className="taxi-banner">
        <img src={bg} alt="Background" className="taxi-banner-img" />
        <div className="taxi-overlay">
          <h1 className="taxi-title">Self Drive Bike</h1>
          <p className="taxi-breadcrumb">
            <a href="/">Home</a> &gt;<a href="/">Self Drive Bike</a>
          </p>
        </div>
      </div>

      <div className="taxi-form">
        <h1 className="taxi-form-title">Book Your Self Drive Bike!</h1>

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

        <div className="taxi-input-group">
          <input type="file" placeholder="file" className="taxi-input" />
        </div>

        <div className="taxi-input-group">
          <input type="text" placeholder="Amount" className="taxi-input" value={amount || ""} readOnly />
        </div>

        <div className="taxi-input-group">
          <input type="date" className="taxi-input" />
          <select className="taxi-select">
            <option>1 day</option>
            <option>2 days</option>
            <option>1 week</option>
          </select>
        </div>

        <Link to={'/payment'}>
          <button className="taxi-submit-btn">Book a Bike</button>
        </Link>
      </div>
    </>
  );
};

export default SelfDriveBike;
