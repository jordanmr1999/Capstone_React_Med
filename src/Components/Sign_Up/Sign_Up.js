import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Sign_Up.css';

const Sign_Up = () => {
    const [phoneError, setPhoneError] = useState(null);
   
    const handlePhoneChange = (e) => {
        const phoneValue = e.target.value;
        setPhoneError(phoneValue.length > 10 ? 'Phone number cannot be more than 10 digits.' : null);
        // Optionally limit input to 10 characters:
        e.target.value = phoneValue.slice(0, 10); // Truncate if exceeding limit
    };

  return (
    <div className="signup-grid">
        <div className="signup-text">
            <h1>Sign Up</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: 'left' }}>
            Already a member? <span>
            <a href="../Login/Login.html" style={{ color: '#2190FF' }}>Login</a>
            </span>
        </div>
        <div className="signup-form">
            <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                type="text"
                name="name"
                id="name"
                required
                className="form-control"
                placeholder="Enter your name"
                aria-describedby="helpId"
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="form-control"
                placeholder="Enter your phone number"
                aria-describedby="helpId"
                onChange={handlePhoneChange}
            />
            {phoneError && <p className="error-message">{phoneError}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                type="email"
                name="email"
                id="email"
                required
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                type="password" // Added for security
                name="password"
                id="password"
                required
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
                />
            </div>
            <div className="btn-group">
                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
            </div>
            </form>
        </div>
    </div>
  );
};
export default Sign_Up;