import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./signin.css";
import bg from "../image/page-title.png";

const Signin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve state from location or sessionStorage
  const storedState = JSON.parse(sessionStorage.getItem("signinState")) || {};
  const { formType, model, selectedPlan, amount } = location.state || storedState;

  // Store state in sessionStorage when the component mounts
  useEffect(() => {
    if (location.state) {
      sessionStorage.setItem("signinState", JSON.stringify(location.state));
    }
  }, [location.state]);

  const handleSignIn = (event) => {
    event.preventDefault();

    console.log("Form Type:", formType); // Debugging

    let redirectPath = "/bookurtaxi"; // Default to taxi booking
    if (formType === "car") {
      redirectPath = "/selfdrivecar";
    }

    navigate(redirectPath, { state: { model, selectedPlan, amount } });
  };

  return (
    <>
      {/* Background Banner */}
      <div className="taxi-banner">
        <img src={bg} alt="Background" className="taxi-banner-img" />
        <div className="taxi-overlay">
          <h1 className="taxi-title">Sign in</h1>
        </div>
      </div>

      {/* Sign In Form */}
      <div className="taxi-form signin">
        <h1 className="taxi-form-title">Sign in</h1>
        <form onSubmit={handleSignIn}>
          <div className="taxi-input-group">
            <input type="email" placeholder="Enter your Email" className="taxi-input" required />
            <input type="password" placeholder="Enter your Password" className="taxi-input" required />
          </div>
          <button type="submit" className="taxi-submit-btn">Sign In</button>
        </form>
        <p style={{ color: "black", textAlign: "center", marginTop: "2px", cursor: "pointer" }}>
          New User?{" "}
          <span style={{ color: "blue" }} onClick={() => navigate("/signup", { state: location.state })}>
            Sign Up
          </span>
        </p>
      </div>

      {/* Call for Booking Section */}
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
