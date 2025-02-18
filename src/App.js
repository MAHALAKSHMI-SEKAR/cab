import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import Container from "./component/Container";
import Footer from "./component/Footer";
import Loading from "./component/Loading";
import BookUrTaxi from "./component/BookUrTaxi";
import Signin from "./component/Signin";
import PaymentMethod from "./component/PaymentMethod";
import SelfDriveCar from "./component/SelfDriveCar";
import SelfDriveBike from "./component/SelfDriveBike";
import PrivateRoute from "./component/PrivateRoute"; 
import Signup from "./component/Signup";
import Contact from "./component/Contact";
import AboutPage from "./component/About";
import TaxiList from "./component/TaxiList";
import Register from "./component/Register";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/taxilist" element={<TaxiList/> } />
        <Route path="/payment" element={<PaymentMethod />} />
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        {/* Protected Routes */}
        <Route
          path="/bookurtaxi"
          element={
            <PrivateRoute>
              <BookUrTaxi />
            </PrivateRoute>
          }
        />
        <Route
          path="/selfdrivecar"
          element={
            <PrivateRoute>
              <SelfDriveCar />
            </PrivateRoute>
          }
        />
        <Route
          path="/selfdrivebike"
          element={
            <PrivateRoute>
              <SelfDriveBike />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
