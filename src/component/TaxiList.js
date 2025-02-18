import React from "react";
import TaxiCard from "./Taxicard";
import taxi1 from "../image/taxi1.jpg";
import taxi2 from "../image/taxi2.jpg";
import taxi3 from "../image/taxi3.jpg";
import bg from "../image/page-title.png";
import "./taxicard.css";

const TaxiList = () => {
  const taxiData = [
    {
      image: taxi1,
      model: "Mercedes-Benz E-Class",
      gear: "Automatic",
      capacity: "4-Seater",
      fuel: "Petrol",
    },
    {
      image: taxi2,
      model: "Ford Explorer 2020",
      gear: "Automatic",
      capacity: "5-Seater",
      fuel: "Diesel",
    },
    {
      image: taxi3,
      model: "Chevrolet Malibu 2018",
      gear: "Automatic",
      capacity: "4-Seater",
      fuel: "Petrol",
    },
    {
      image: taxi1,
      model: "Honda Accord 2019",
      gear: "Automatic",
      capacity: "4-Seater",
      fuel: "Hybrid",
    },
    {
      image: taxi2,
      model: "Audi A6 2021",
      gear: "Automatic",
      capacity: "4-Seater",
      fuel: "Petrol",
    },
    {
      image: taxi3,
      model: "Nissan Altima 2017",
      gear: "Automatic",
      capacity: "4-Seater",
      fuel: "Petrol",
    },
  ];

  return (
    <>
      <div className="taxi-header-banner">
        <img src={bg} alt="Background" className="taxi-banner-image" />
        <div className="taxi-banner-overlay">
          <h1 className="taxi-heading">Booking</h1>
          <p className="taxi-navigation">
            <a href="/">Home</a> &gt; <a href="/">Booking</a>
          </p>
        </div>
      </div>

      <div className="card-container">
        <div className="card-grid">
          {taxiData.map((taxi, index) => (
            <TaxiCard key={index} {...taxi} />
          ))}
        </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxiList;
