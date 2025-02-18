import { useState, useEffect } from 'react';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Container.css"; // Import CSS file
import car1 from '../image/car1.jpg';
import car2 from '../image/car2.jpg';
import car3 from '../image/car3.jpg';
import { motion, useAnimation } from "framer-motion";
import blog1 from '../image/blog1.jpg';
import blog2 from '../image/blog2.jpg';
import blog3 from '../image/blog3.jpg';
import cartype1 from "../image/cartype1.jpeg";
import cartype2 from "../image/carttype2.jpeg";
import cartype3 from "../image/cartype3.jpeg";
import cartype4 from "../image/cartype4.jpeg";
import cartype5 from "../image/cartype5.jpeg";
import { useNavigate } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: "Unusual Or Unique Rental Car Experiences",
    description: "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Nam Possimus Modi.",
    category: "Travel",
    image: blog1,
    author: "Travel",
    date: "Jun 1, 2023"
  },
  {
    id: 2,
    title: "Saving Money On Rental Car Expenses",
    description: "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Nam Possimus Modi.",
    category: "Airport",
    image: blog2,
    author: "Admin",
    date: "May 20, 2023"
  },
  {
    id: 3,
    title: "Essential Accessories For A Road Trip",
    description: "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Nam Possimus Modi.",
    category: "Lifestyle",
    image: blog3,
    author: "Admin",
    date: "May 2, 2023"
  }
];

const carData = [
  { id: 1, category: "Convertible", image: car1 },
  { id: 2, category: "Sports Car", image: car2 },
  { id: 3, category: "SUV", image: car3 },
  { id: 4, category: "Mini Van", image: cartype1 },
  { id: 5, category: "Convertible", image: cartype2 },
  { id: 6, category: "Sports Car", image: cartype3 },
  { id: 7, category: "SUV", image: cartype4 },
  { id: 8, category: "Mini Van", image: cartype5 },
];

const carcategories = ["All", "Convertible", "SUV", "Sports Car", "Mini Van"];

const services = [
  {
    title: "Business Transfer",
    description: "Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi, lorem bibendum auctor.",
    image: blog1,
  },
  {
    title: "Online Booking",
    description: "Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi, lorem bibendum auctor.",
    image: blog2,
  },
  {
    title: "City Transport",
    description: "Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi, lorem bibendum auctor.",
    image: blog3,
  },
];
const filters = [
  { title: "CAR PLUS", discount: "Get 12.5% Discount" },
  { title: "RENTAL ASSURED", discount: "APPLY FILTER" },
  { title: "Highest Rated Cars", discount: ">4 Star Rating" },
  { title: "FLASH OFFER", discount: "APPLY FILTER" },
  { title: "Upto 15% off", discount: "Celebration Partners" },
];

const Container = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const controls = useAnimation();
  const navigate = useNavigate();

  const filteredCars =
    selectedCategory === "All"
      ? carData
      : carData.filter((car) => car.category === selectedCategory);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        controls.start({ opacity: 1, y: 0 });
      }
      if (scrollY > 500) {
        controls.start({ opacity: 1, x: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const SelfDriveBike=() =>{
    navigate('/selfdrivebike');
  }


  return (
    <>
      <div className="image-container">
        <Swiper
          pagination={{ dynamicBullets: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-container">
              <img className="slide-img" src={car1} alt="car" />
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <img className="slide-img" src={car2} alt="car" />
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <img className="slide-img" src={car3} alt="car" />
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="button-container">
          <h1 className='img-title'>Best Cars For The Best Journey</h1>
          <p className='img-subtitle'>We Provide Best cars With The Best Prices. We Are Expert In Car Rental.Enjoy Your Holidays With Us. We Make Your Drive Memorable.We Care For Your Safety</p>
          <div className="button-row">
            <button type="button" className="btn" onClick={ () =>navigate('/taxilist')}>Book Self Car Drive</button>
            <button type="button" className="btn" onClick={ () =>navigate('/')} >Car Booking</button>
            <button type="button" className="btn" onClick={SelfDriveBike} >Book Self Bike Drive</button>
          </div>
        </div>
      </div>

      <div className="carousel-wrapper">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {filters.map((filter, index) => (
          <SwiperSlide key={index} className="carousel-slide">
            <div className="carousel-box">
              <p className="carousel-title">{filter.title}</p>
              <p className="carousel-discount">{filter.discount}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      <motion.div
        className="services-container"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            whileHover={{ scale: 1.1 }}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="car-gallery-container">
        <h6 className="card-subtitle mb-2 text-body-secondary">Most Famous Cars</h6>
        <h2 className="contcard-title">Our Gallery</h2>
        <div className="gallery-buttons">
          {carcategories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? "active-btn" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {filteredCars.map((car) => (
            <div key={car.id} className="gallery-card">
              <img src={car.image} alt={car.category} className="car-image" />
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="blog-container"
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        transition={{ duration: 0.6 }}
      >
         <h6 class="card-subtitle mb-2 text-body-secondary">Recent News & Blogs</h6>
         <h2 className="contcard-title">MY BLOGS</h2>
       <div className="blog-grid">
         {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-img-container">
              <img src={blog.image} alt={blog.title} className="blog-img" />
              <span className="blog-category">{blog.category}</span>
            </div>
            <div className="blog-content">
              <h3 className="blog-heading">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
            </motion.div>
    </>
  );
};

export default Container;