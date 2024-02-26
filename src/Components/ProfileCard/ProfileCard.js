import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ email, phone, name }) => {
  return (
    <div className="profile-card">
      <div className="profile-info">
        <h2>Your Profile</h2>
        <p>Name: {name}</p>
        <p>Phone Number: {phone} </p>
        {/* Add more user information as needed */}
      </div>
    </div>
  );
};

export default ProfileCard;
