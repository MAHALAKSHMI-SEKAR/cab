import React from 'react';
import './About.css';
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPhone, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import c1 from '../image/image1.jpg';
import c2 from '../image/c2.jpg';
import backgroundImage from '../image/backgroundImage.jpg';
import image1 from '../image/c1.jpg';
import icon from '../image/icon.jpg';
import track from '../image/track.jpg';
import route from '../image/route.jpg';
import bck from '../image/pattern-5.jpg';
import client from '../image/client.jpg';
import driver1 from '../image/driver1.jpg';
import driver2 from '../image/driver2.jpg';
import driver3 from '../image/driver3.jpg';

const drivers = [
  { name: "Tricia Gibney", position: "President, Manager", phone: "+380 50 318 47 07", image: driver1 },
  { name: "Thomas Walker", position: "President, Manager", phone: "+380 50 318 47 07", image: driver2 },
  { name: "Roman Morko", position: "President, Manager", phone: "+380 50 318 47 07", image: driver3 },
];


const DriverProfileCard = ({ driver }) => (
  <Col md={4} className="driver-profile-column">
    <Card className="driver-profile-card">
      <Card.Body>
        <h5 className="driver-profile-name">{driver.name}</h5>
        <p className="driver-profile-position">{driver.position}</p>
        <div className="driver-contact">
          <FaPhone className="driver-contact-icon" /> {driver.phone}
        </div>
        {/* Yellow Background Wrapper */}
        <div className="driver-profile-image">
          <img src={driver.image} alt={driver.name} />
        </div>
        <div className="driver-social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </Card.Body>
    </Card>
  </Col>
);


const AboutPage = () => {
  return(
    <div className="container-fluid p-0">
      <div className="car-background">
        <div className="overlay-text">
          <h1>About Us</h1>
          <p>Home / About Us</p>
        </div>
      </div>
      <div className="row">
        {/* Image Column */}
        <div className="image-column">
        {/* Displaying three images */}
        <div className="image-item">
          <img src={c1} alt="" className="image1" />
        </div>
        <div className="image-item">
          <img src={c2} alt="" className="image2" />
        </div>
        </div>
        {/* Content Column */}
        <div className="content-column">
        <h1>WELCOME TO OUR COMPANY</h1>
        <h2>Feel the difference and Relaxation!</h2>
        <p>
          We successfully cope with tasks of varying complexity, provide long-term guarantees, and regularly master new technologies.
          Our portfolio includes dozens of successfully completed projects of houses of different storeys.
        </p>
        <ul>
          <li> We successfully cope with tasks of varying complexity.</li>
          <li>Long-term guarantees and regularly.</li>
          <li>Master new technologies.</li>
        </ul>
        <h3>Call For Taxi</h3>
        <p className="phone-number">5267-214-392</p>
      </div>
        <div className="background-container">
              {/* Background Image as img tag */}
              <img src={backgroundImage} alt="" className="background-image" />
              <div className="main-content">
                {/* Content Section */}
                <div className="text-section">
                  <h1>OUR SERVICES</h1>
                  <h2>Our Best Services For You</h2>
                  <ul>
                    <li> 01. City Transport</li>
                    <li> 02. Online Booking</li>
                    <li> 03. Regular Transport</li>
                    <li> 04. Airport Transfer</li>
                  </ul>
                </div>
        
                {/* Image Section */}
                <div className="image-section">
                  <img src={image1} alt="Company" className="company-image" />
                </div>
              </div>
              </div>
            <Container className='how-it-works'>
            <div className="section-title">
              <h6>ORDER TAXI ONLINE</h6>
              <h2>How It Works</h2>
            </div>
            <Row className="steps-row">
            <Col md={4} className="step">
              <div className="step-icon"><img className='step-img' src={icon} alt="" /></div>
              <div className="step-content">
              <h4>BOOK IN JUST 2 TABS</h4>
              <p>Skip the hassle and book your ride instantly! 
              Select location, tap to confirm, and you're ready to go!</p>
              </div>
            </Col>

             <Col md={4} className="step">
              <div className="step-icon"><img className='step-img' src={track} alt="" /></div>
              <div className="step-content">
              <h4>TRACK YOUR DRIVER</h4>
              <p>Stay updated! Track your driver’s location on the map, 
              see arrival time with smooth pickup experience..</p>
              </div>
            </Col>

            <Col md={4} className="step">
              <div className="step-icon"><img className='step-img' src={route} alt="" /></div>
              <div className="step-content">
              <h4>PICK & ARRIVE SAFELY</h4>
              <p>Enjoy secure and comfortable ride. 
              Our trusted drivers ensure a smooth journey every time!</p>
              </div>
            </Col>
            </Row>
      </Container>
      <section className="customer-feedback">
            <img src={bck} alt="" className="bck-image" />
            <div className="acontainer">
              <h6 className="text-uppercase text-muted">Testimonials</h6>
              <h2 className="fw-bold">Client’s Reviews</h2>
              <div className="feedback-card d-flex align-items-center">
                <div className="feedback-text p-4">
                 <p>
                  “Continually actualize alternative through visionary materials. Without total linkage. Rapidiously just in time strategic theme areas whereas communities scalable supply chains impact functionalized.”
                </p>
                <div className="feedback-author d-flex align-items-center">
                  <div className="score-badge">99</div>
                <div>
                <h5 className="fw-bold">Marko Marlee</h5>
                <p className="text-muted">Director at Taxiroom</p>
                <div className="stars">★★★★★</div>
              </div>
            </div>
          </div>
          <div className="feedback-image">
            <img src={client} alt="Client" className="client-image" />
          </div>
          <div className="yellow-background"></div>
          </div>
        </div>
      </section>

      <Container className="driver-section">
          <h2 className="driver-section-title">Meet Our Expert Drivers</h2>
          <Row className="gy-3 gx-2 justify-content-center">
          {drivers.map((driver, index) => (
          <DriverProfileCard key={index} driver={driver} />
          ))}
          </Row>
      </Container>

    
    </div>
  
  </div>
  );
};

export default AboutPage;