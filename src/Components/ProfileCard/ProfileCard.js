import React from "react";
import "./ProfileCard.css";
import ProfileForm from "./ProfileForm";
import { Link } from "react-router-dom";

const ProfileCard = ({ email, phone, name }) => {
    const fileName = "ProfileForm.js"; 
    return (
    <div className="profile-card">
      <div className="profile-info">
        <h2>Your Profile</h2>
        <Link to={'/profileForm'}>Your Profile</Link><br></br>
        <Link to={'/profileReports'}>Your Reports</Link>
        {/* Add more user information as needed */}
      </div>
    </div>
  );
};

export default ProfileCard;
