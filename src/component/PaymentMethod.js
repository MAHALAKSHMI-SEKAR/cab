import React, { useState } from "react";
import "./payment.css";
import bg from "../image/page-title.png";

const PaymentMethod = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const paymentOptions = [
    {
      title: "Credit Card / Debit Card",
      fields: ["Name on the Card", "Card Number", "Expiry Date", "Security Code"],
    },
    {
      title: "Direct Bank Transfer",
      content: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.",
    },
    {
      title: "Cheque Payment",
      content: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.",
    },
    {
      title: "Other Payment",
      content: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.",
    },
  ];

  return (
    <>
      <div className="taxi-header-banner">
        <img src={bg} alt="Background" className="taxi-banner-image" />
        <div className="taxi-banner-overlay">
          <h1 className="taxi-heading">Booking</h1>
          <p className="taxi-navigation">
            <a href="/">Home</a> &gt; <a href="/">Payment</a>
          </p>
        </div>
      </div>

      <div className="payment-method">
        <h2 className="fw-bold">Choose a Payment Method</h2>
        {paymentOptions.map((option, index) => (
          <div key={index}>
            <button
              className={`payment-button ${index === paymentOptions.length - 1 ? "black-button" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {option.title}
              <i className={`fa-solid ${openIndex === index ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
            </button>

            {openIndex === index && (
              <div className="payment-content">
                {option.fields ? (
                  <div className="card-details">
                    {option.fields.map((placeholder, i) => (
                      <input key={i} style={{color:'black'}} type="text" placeholder={placeholder} className="input-box" />
                    ))}
                    <button className="payment-button yellow-button">Make Payment</button>
                  </div>
                ) : (
                  <p style={{color:'black'}}>{option.content}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default PaymentMethod;
