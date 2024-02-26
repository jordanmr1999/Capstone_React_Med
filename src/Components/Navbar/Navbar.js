import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../ProfileCard/ProfileCard"; // Import your ProfileCard component
import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
    
        // Clear local storage
        localStorage.removeItem("doctorData");
    
        // Reset state
        setIsLoggedIn(false);
        setEmail("");
    
        // Remove the reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("reviewFormData_")) {
                localStorage.removeItem(key);
            }
        }
    
        // Reload the window
        window.location.reload();
    };

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        const storedEmail = sessionStorage.getItem("email");

        if (storedEmail) {
            setIsLoggedIn(true);
            setEmail(storedEmail);
        }
    }, []);

    return (
        <nav>
            <div className="nav__logo">
                <Link to="/">
                    StayHealthy <i style={{ color: '#2190FF' }} className="fa fa-user-md"></i>
                </Link>
                <span>.</span>
            </div>
            <div className="nav__icon" onClick={handleClick}>
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            <ul className={click ? 'nav__links active' : 'nav__links'}>
                <li className="link">
                    <Link to="/">Home</Link>
                </li>
                <li className="link">
                    <Link to="/appointments">Appointments</Link>
                </li>
                <li className="link">
                    <Link to="/instant-consultation">InstantConsultation</Link>
                </li>
                <li className="link">
                    <Link to="/healthblog">Health Blog</Link>
                </li>
                <li className="link">
                    <Link to="/reviews">Reviews</Link>
                </li>
                {isLoggedIn ? (
                    <>
                        <li className="link" onClick={handleDropdown}>
                            <span className="welcome-message">Welcome, {email}</span>
                            {showDropdown && <ProfileCard email={email} />} {/* Pass email to ProfileCard */}
                        </li>
                        <li className="link">
                            <button className="btn2" onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="link">
                            <Link to="/signup">
                                <button className="btn1">Sign Up</button>
                            </Link>
                        </li>
                        <li className="link">
                            <Link to="/login">
                                <button className="btn1">Login</button>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
