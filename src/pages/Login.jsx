import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    
    if (!email) {
      newErrors.email = 'Email or mobile number is required';
    } else if (!emailRegex.test(email) && !phoneRegex.test(email)) {
      newErrors.email = 'Enter a valid email or mobile number';
    }

    setErrors(newErrors);
    setValidated(Object.keys(newErrors).length === 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setValidated(false); // Reset validation state when user types
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (validateForm()) {
      console.log('Form submitted', email);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <form noValidate onSubmit={handleSubmit}>
            <div className='border border-slate-gray py-3 px-4 rounded'>
              <h2 className="mb-4">Sign in</h2>
              
              <div className="mb-3">
                <label className="form-label fw-bold">Email or mobile phone number</label>
                <input
                  type="text"
                  className={`form-control ${errors.email ? 'is-invalid' : validated ? 'is-valid' : ''}`}
                  placeholder="Enter email or mobile number"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">{errors.email}</div>
              </div>

              <button type="submit" className="btn btn-warning w-100 mb-3 rounded-5">
                Continue
              </button>

              <div className="text-muted small mb-3">
                By continuing, you agree to Amazon's &nbsp;
                <Link to="/conditions">Conditions of Use</Link> and &nbsp;
                <Link to="/privacy">Privacy Notice</Link>.
              </div>

              <div className="mb-3">
                <details className="text-primary">
                  <summary>Need help?</summary>
                  <div className="mt-2">
                    <Link to="/forgot-password" className="d-block small text-primary">
                      Forgot Password
                    </Link>
                    <Link to="/sign-in-issues" className="d-block small text-primary">
                      Other issues with Sign-In
                    </Link>
                  </div>
                </details>
              </div>
           

            <div className="text-start mt-4 pt-3 border-top">
              <p className="text-muted small  fw-bold">Buying for work?</p>
              <Link to="/amazon-business" className="text-decoration-none">
                Shop on Amazon Business
              </Link>
            </div>
            </div>

            <div className="text-center mt-4">
              <p className="text-muted small mb-3">New to Amazon?</p>
              <Link to="/register" className="rounded-5 small align-middle border border-1 border-black text-decoration-none text-black px-5 py-1  w-100">
                Create your Amazon account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
