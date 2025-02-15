import {  useNavigate } from "react-router-dom";
import "./signin.css";
import bg from "../image/page-title.png";

const Signin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true"); // Simulate login

    const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";
    localStorage.removeItem("redirectAfterLogin"); // Clear storage
    navigate(redirectPath);
  };

  return (
    <>
      {/* Background Banner */}
      <div className="taxi-banner">
        <img src={bg} alt="Background" className="taxi-banner-img" />
        <div className="taxi-overlay">
          <h1 className="taxi-title">Signin</h1>
        </div>
      </div>

      {/* Booking Form */}
      <div className="taxi-form signin">
        <h1 className="taxi-form-title">Signin</h1>
        <div className="taxi-input-group">
          <input type="text" placeholder="Enter your Email" className="taxi-input" />
          <input type="password" placeholder="Enter your password" className="taxi-input" />
        </div>
        <button className="taxi-submit-btn" onClick={handleLogin}>Signin</button>
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

export default Signin;
