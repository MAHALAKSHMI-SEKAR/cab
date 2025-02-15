import React from "react";
import { motion } from "framer-motion";
import "./taxicard.css";
import { useNavigate } from "react-router-dom";

const TaxiCard = ({ image, title, location, price, mileRate, trafficRate, passengers }) => {
  const navigate =useNavigate();
  const handle=()=>{
    navigate('/bookurtaxi');
  }
  return (
    <>
    <motion.div
      className="card"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="card-image-section">
        <img src={image} alt={title} className="card-photo" />
        
      </div>
      <div className="card-info">
      <div className="card-icon"></div>
        <h3 className="card-heading">{title}</h3>
        <p className="card-details">Price: ₹{price.toFixed(2)}</p>
        <p className="card-details">Mile Rate: ₹{mileRate.toFixed(2)}</p>
        <p className="card-details">Traffic Rate: ₹{trafficRate.toFixed(2)}</p>
        <p className="card-details">Passengers: {passengers}</p>
        <button className="book-btn" onClick={handle}>BOOK TAXI</button>
      </div>
    </motion.div>
    </>
  );
};

export default TaxiCard;