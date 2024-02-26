import React, { useState } from 'react';
import './ReviewForm.css'; // Assuming styles are defined there
import GiveReviews from './GiveReviews';

const doctors = [
  { id: 1, name: 'Dr. John Smith', specialty: 'Cardiology', rating: 4.5 },
  { id: 2, name: 'Dr. Jane Doe', specialty: 'Dermatology', rating: 4.8 },
  { id: 3, name: 'Dr. Michael Lee', specialty: 'Orthopedics', rating: 4.2 },
];

const ReviewForm = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleButtonClick = (doctorId) => {
    setSelectedDoctor(doctorId);
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <h1>Reviews</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Specialty</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>
                <button onClick={() => handleButtonClick(doctor.id)}>Click Here</button>
              </td>
              {/* <td>{submittedReview}</td> */}
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Conditionally render GiveReviews based on selectedDoctor */}
      {selectedDoctor !== null && <GiveReviews selectedDoctor={selectedDoctor} />}
    </div>
  );
};

export default ReviewForm;
