import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./taxicard.css";

const TaxiCard = ({ image, model, gear, capacity, fuel }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  const handlePlanChange = (event) => {
    const plan = event.target.value;
    setSelectedPlan(plan);
    if (plan === "8 hr") setAmount("₹1500");
    else if (plan === "24 hr") setAmount("₹2000");
    else if (plan === "Infinity") setAmount("₹5000");
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="card-image-section">
        <img src={image} alt={model} className="card-photo" />
      </div>

      <div className="card-info">
        <div className="card-icon"></div>
        <h3 className="tcard-heading">{model}</h3>
        <p className="tcard-details">Gear: {gear}</p>
        <p className="tcard-details">Capacity: {capacity}</p>
        <p className="tcard-details">Fuel: {fuel}</p>

        <div className="plan-selection">
          <label className="tcard-details">Select Plan:</label>
          <select className="plan-dropdown" onChange={handlePlanChange}>
            <option>Choose Your Plan</option>
            <option value="8 hr">8 Hours</option>
            <option value="24 hr">24 Hours</option>
            <option value="Infinity">Unlimited</option>
          </select>
        </div>

        <button
          className="book-btn"
          onClick={() =>
            navigate("/signin", {
              state: { model, selectedPlan, amount, formType: "taxi" }, // Pass formType
            })
          }
        >
          Book Taxi
        </button>
      </div>
    </motion.div>
  );
};

export default TaxiCard;
