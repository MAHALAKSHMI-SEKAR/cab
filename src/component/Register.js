import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../image/page-title.png";
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePassword = (password) => password.length >= 6;
  const validateMobile = (mobile) => /^[7-9][0-9]{9}$/.test(mobile);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile || !formData.password) {
      setErrors({ general: "Please fill in all fields." });
      return;
    }
    if (!validateEmail(formData.email)) {
      setErrors({ email: "Invalid email format." });
      return;
    }
    if (!validatePassword(formData.password)) {
      setErrors({ password: "Password must be at least 6 characters long." });
      return;
    }
    if (!validateMobile(formData.mobile)) {
      setErrors({ mobile: "Please enter a valid 10-digit Indian mobile number." });
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <>
      {/* Background Banner */}
      <div className="bookurtaxi-banner">
        <img src={bg} alt="Background" className="bookurtaxi-banner-img" />
        <div className="bookurtaxi-overlay">
          <h1 className="bookurtaxi-title">Booking</h1>
          <p className="bookurtaxi-breadcrumb">
            <a href="/">Home</a> &gt; <a href="/">Pages</a> &gt; <a href="/">Booking</a>
          </p>
        </div>
      </div>

      {/* Registration Form */}
      <div className="bookurtaxi-container">
        <div className="bookurtaxi-card">
          <div className="bookurtaxi-card-body">
            <h2 className="bookurtaxi-heading">Register to Your Account</h2>
            <form>
              <input type="text" className="bookurtaxi-input" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" />
              
              <input type="email" className="bookurtaxi-input" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" />
              {errors.email && <small className="bookurtaxi-error">{errors.email}</small>}

              <input type="tel" className="bookurtaxi-input" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="Enter your mobile number" />
              {errors.mobile && <small className="bookurtaxi-error">{errors.mobile}</small>}

              <input type="password" className="bookurtaxi-input" name="password" value={formData.password} onChange={handleInputChange} placeholder="Create a password" />
              {errors.password && <small className="bookurtaxi-error">{errors.password}</small>}

              <button type="submit" className="taxi-submit-btn" onClick={handleRegisterClick}>Register</button>
              {errors.general && <div className="bookurtaxi-error">{errors.general}</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
