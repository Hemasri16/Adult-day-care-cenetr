// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Signin from './Components/Signin';
import NewFoodForm from './Components/Food/NewFoodForm';
import ParticipantList from './Components/Participants/ParticipantList';
import SigninDriver from './Components/SigninDriver'

// src/App.js
import DriversList from './Components/Drivers/DriversList'; 
import AttendanceList from './Components/Attendance/AttendanceList'; // Check this import state
import SigninAttendance from './Components/SigninAttendance';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes> {/* Change from Switch to Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/NewFoodForm" element={<NewFoodForm/>}/>
          <Route path="/SigninDriver" element={<SigninDriver/>}/>
          <Route path="/participantList" element={<ParticipantList/>}/>
          <Route path="/driversList" element={<DriversList/>}/>
          <Route path="/attendancelist" element={<AttendanceList/>}/>
          <Route path="/SigninAttendance" element={<SigninAttendance/>}/>
          
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
