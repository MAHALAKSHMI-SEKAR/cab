import { useNavigate, useLocation } from "react-router-dom";
import "./signin.css";
import bg from "../image/page-title.png";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formType, model, selectedPlan, amount } = location.state || {};

  const handleSignUp = (event) => {
    event.preventDefault(); // Prevent page reload

    let redirectPath = "/bookurtaxi"; // Default to taxi booking
    if (formType === "bike") {
      redirectPath = "/selfdrivebike";
    } else if (formType === "car") {
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
          <h1 className="taxi-title">Sign Up</h1>
        </div>
      </div>

      {/* Sign Up Form */}
      <div className="taxi-form signin">
        <h1 className="taxi-form-title">Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <div className="taxi-input-group">
            <input type="text" placeholder="Username" className="taxi-input" required />
            <input type="email" placeholder="Enter your Email" className="taxi-input" required />
            <input type="password" placeholder="Enter your Password" className="taxi-input" required />
          </div>
          <button type="submit" className="taxi-submit-btn">
            Sign Up
          </button>
        </form>
        <p style={{ color: "black", textAlign: "center", marginTop: "2px", cursor: "pointer" }}>
          Already have an account?{" "}
          <span style={{ color: "blue" }} onClick={() => navigate("/signin", { state: location.state })}>
            Sign In
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

export default Signup;
