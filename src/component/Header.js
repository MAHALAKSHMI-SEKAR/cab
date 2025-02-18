import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './Header.css';
import logo from '../image/logo.png';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className='logo' src={logo} alt="logo" />
            RENTAL
            <FontAwesomeIcon icon={faCarSide} beatFade style={{ color:"rgb(255, 238, 0)", fontSize: "1.5em" }} /> 
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            style={{ color: "white" }}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
            <button className="btn" type="submit">
            <Link className="nav-link" to="/register">
                  Registration
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
