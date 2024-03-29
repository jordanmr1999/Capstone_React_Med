import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Navbar/Navbar';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileForm from './Components/ProfileCard/ProfileForm';
import Reports from './Components/ReportsLayout/ReportsLayout';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Notification>
          <Navbar/>
              <Routes>
                <Route path="/" element={<Landing_Page/>}/>
                <Route path="/signup" element={<Sign_Up/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/instant-consultation" element={<InstantConsultation/>}/>
                <Route path="/notification" element={<Notification/>}/>
                <Route path="/reviews" element={<ReviewForm/>}/>
                <Route path="/profileForm" element={<ProfileForm/>}/>
                <Route path="/profileReports" element={<Reports/>}/>
              </Routes>
          </Notification>
        </BrowserRouter>
       
    </div>
  );

}
export default App;
