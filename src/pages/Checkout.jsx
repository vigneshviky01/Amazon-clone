import React, { useState } from "react";
import {  useSelector } from "react-redux";
const Checkout = () => {
    const { total } = useSelector((store) => store.cart);
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      address: "",
      city: "",
      pinCode: "",
      paymentMethod: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const validateForm = () => {
      const newErrors = {};
  
      if (!formData.fullName) newErrors.fullName = "Full Name is required";
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.address) newErrors.address = "Address is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.pinCode) {
        newErrors.pinCode = "PIN Code is required";
      } else if (!/^\d{6}$/.test(formData.pinCode)) {
        newErrors.pinCode = "PIN Code must be 6 digits";
      }
      if (!formData.paymentMethod)
        newErrors.paymentMethod = "Payment method is required";
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        // Proceed with checkout
        console.log("Checkout successful", formData);
        setShowToast(true);
  
        // Automatically hide toast after 3 seconds
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      }
    };
  
    return (
      <div
        style={{ marginTop: "20px" }}
        className="container mt-5 padding-top-on-section"
      >
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-warning text-dark">
                <h3 className="text-center mb-0">Checkout</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.fullName ? "is-invalid" : ""
                      }`}
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <div className="invalid-feedback">{errors.fullName}</div>
                    )}
                  </div>
  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
  
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <textarea
                      className={`form-control ${
                        errors.address ? "is-invalid" : ""
                      }`}
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    {errors.address && (
                      <div className="invalid-feedback">{errors.address}</div>
                    )}
                  </div>
  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="city" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.city ? "is-invalid" : ""
                        }`}
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                      {errors.city && (
                        <div className="invalid-feedback">{errors.city}</div>
                      )}
                    </div>
  
                    <div className="col-md-6 mb-3">
                      <label htmlFor="pinCode" className="form-label">
                        PIN Code
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.pinCode ? "is-invalid" : ""
                        }`}
                        id="pinCode"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                      />
                      {errors.pinCode && (
                        <div className="invalid-feedback">{errors.pinCode}</div>
                      )}
                    </div>
                  </div>
  
                  <div className="mb-3">
                    <label className="form-label">Payment Method</label>
                    <div
                      className={`border p-2 ${
                        errors.paymentMethod ? "border-danger" : ""
                      }`}
                    >
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="creditCard"
                          name="paymentMethod"
                          value="creditCard"
                          checked={formData.paymentMethod === "creditCard"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="creditCard">
                          Credit Card
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="paypal"
                          name="paymentMethod"
                          value="paypal"
                          checked={formData.paymentMethod === "paypal"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="paypal">
                          PayPal
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="cashOnDelivery"
                          name="paymentMethod"
                          value="cashOnDelivery"
                          checked={formData.paymentMethod === "cashOnDelivery"}
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="cashOnDelivery"
                        >
                          Cash on Delivery
                        </label>
                      </div>
                      {errors.paymentMethod && (
                        <div className="text-danger small mt-2">
                          {errors.paymentMethod}
                        </div>
                      )}
                    </div>
                  </div>
  
                  <div className="mb-3">
                    <div className="card">
                      <div className="card-body bg-light">
                        <h5 className="card-title">Order Summary</h5>
                        <div className="d-flex justify-content-between">
                          <span>Total:</span>
                          <strong>₹ {total} </strong>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <button
                    type="submit"
                    className="btn btn-warning text-dark fw-bold w-100"
                  >
                    Place Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="toast-container position-fixed top-0 end-0 p-3 ">
          <div
            id="liveToast"
            className={`toast ${showToast ? "show" : ""}`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-body bg-success text-white fw-bold">
              Order Placed Successfully...!
              <button
                type="button"
                className="btn-close btn-close-white float-end text-white"
                onClick={() => setShowToast(false)}
                aria-label="Close"
              ></button>{" "}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Checkout