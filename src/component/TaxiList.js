import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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
      title: "Mercedes-Benz E-Class",
      location: "LOS ANGELES",
      price: 3.2,
      mileRate: 4.8,
      trafficRate: 2.0,
      passengers: 4,
    },
    {
      image: taxi2,
      title: "Ford Explorer 2020",
      location: "MIAMI",
      price: 3.5,
      mileRate: 5.2,
      trafficRate: 2.3,
      passengers: 5,
    },
    {
      image: taxi3,
      title: "Chevrolet Malibu 2018",
      location: "DALLAS",
      price: 2.8,
      mileRate: 4.0,
      trafficRate: 1.8,
      passengers: 4,
    },
    {
      image: taxi1,
      title: "Honda Accord 2019",
      location: "SEATTLE",
      price: 3.0,
      mileRate: 4.5,
      trafficRate: 2.0,
      passengers: 4,
    },
    {
      image: taxi2,
      title: "Audi A6 2021",
      location: "BOSTON",
      price: 4.5,
      mileRate: 6.0,
      trafficRate: 2.8,
      passengers: 4,
    },
    {
      image: taxi3,
      title: "Nissan Altima 2017",
      location: "HOUSTON",
      price: 2.7,
      mileRate: 3.8,
      trafficRate: 1.6,
      passengers: 4,
    },
  ];
  
  return (
    <>
      <div className="taxi-header-banner">
        <img src={bg} alt="Background" className="taxi-banner-image" />
        <div className="taxi-banner-overlay">
          <h1 className="taxi-heading">Booking</h1>
          <p className="taxi-navigation">
            <a href="/">Home</a> &gt;{" "}
            <a href="/">Booking</a>
          </p>
        </div>
      </div>

      {/* Keeping card-container and card-layout inside Swiper */}
      <div className="card-container">
        <Swiper
          pagination={{ dynamicBullets: true }}
          spaceBetween={20}
          slidesPerView={1}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]} // Import Pagination Module
        >
          <div className="card-layout">
            {taxiData.map((taxi, index) => (
              <SwiperSlide key={index}>
                <TaxiCard {...taxi} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      <div className="cab-booking-container">
        <div className="cab-booking-content">
          <div className="cab-info">
            <p className="cab-subtitle">
              LONG ESTABLISHED FACT THAT A READER
            </p>
            <h2 className="cab-title">
              BOOK YOUR CAB IT'S SIMPLE AND AFFORDABLE
            </h2>
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
