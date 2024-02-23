import React, { useState } from 'react';

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleSlotSelection = (e) => {
    setSelectedSlot(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (phoneNumber.length !== 10) {
      alert('Phone number must be no longer than 10 numbers.');
      return;
    }

    onSubmit({ name, phoneNumber, appointmentDate, appointmentSlot: selectedSlot });
    setName('');
    setPhoneNumber('');
    setAppointmentDate('');
    setSelectedSlot(null);
  };

  return (
    <form onSubmit={handleFormSubmit} className="appointment-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="appointmentDate">Appointment Date:</label>
        <input
          type="date"
          id="appointmentDate"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="appointmentSlot">Appointment Slot:</label>
        <select
          id="appointmentSlot"
          onChange={handleSlotSelection}
          value={selectedSlot}
          required
        >
          <option value="" disabled>Select a slot</option>
          {/* Add options dynamically based on available slots */}
          <option value="slot1">10:30 AM</option>
          <option value="slot2">5:00 PM</option>
          {/* Add more slots as needed */}
        </select>
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default AppointmentFormIC;

