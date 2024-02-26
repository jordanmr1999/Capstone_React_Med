import React, { useState } from 'react';
import './Reports.css'; // Assuming styles are defined there

const doctors = [
  { id: 1, name: 'Dr. John Smith', specialty: 'Cardiology', rating: 4.5, reportFileName: 'report1.pdf' },
  { id: 2, name: 'Dr. Jane Doe', specialty: 'Dermatology', rating: 4.8, reportFileName: 'report2.pdf' },
  { id: 3, name: 'Dr. Michael Lee', specialty: 'Orthopedics', rating: 4.2, reportFileName: 'report3.pdf' },
];

const Reports = () => {
  const publicUrl = process.env.PUBLIC_URL;
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleViewReport = () => {
    return (
        <div>
        <iframe src='./patient_report.pdf' width='100%' height='500px'/>
        </div>
        );
      };

  const downloadReport = () => {
    // Use the 'download' attribute to trigger the download
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/patient_report.pdf';
    link.download = 'patient_report.pdf';
    link.click();
  };

  const handleButtonClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <h1>Reports</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Specialty</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>
                <button onClick={() => handleViewReport()}>View</button>
              </td>
              <td>
                <button onClick={downloadReport()}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
};

export default Reports;
