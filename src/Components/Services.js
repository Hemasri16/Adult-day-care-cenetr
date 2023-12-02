import React from 'react';
import { Link } from 'react-router-dom'; 
import enrollmentImage from '../images/enrollment.jpg';
import signInImage from '../images/sign-in.jpg';
import foodTrackingImage from '../images/food-tracking.jpg';
import attendanceImage from '../images/attendance.jpg';
// Styles
const servicesSection = {
  backgroundColor: '#fff',
  padding: '60px 20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const servicesHeading = {
  fontSize: '36px',
  marginBottom: '20px',
  textAlign: 'center',
};

const serviceItem = {
  marginBottom: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const serviceHeading = {
  fontSize: '24px',
  marginBottom: '10px',
};

const serviceImage = {
  width: '100%',
  maxWidth: '400px',
  borderRadius: '8px',
  marginBottom: '10px',
};

const Services = () => {
  return (
    <section style={servicesSection}>
      <h2 style={servicesHeading}>Our Services</h2>
      <div style={serviceItem}>
        <h3 style={serviceHeading}>Enrollment</h3>
        <Link to="/"> {/* Link to the "enrollment" page */}
        <img src={enrollmentImage} alt="Enrollment" style={serviceImage} />
        </Link>
        <p>
          We provide a simple and straightforward enrollment process to welcome your loved ones to our center.
        </p>
      </div>
      <div style={serviceItem}>
        <h3 style={serviceHeading}>Sign-in Procedures</h3>
        <Link to="/Signin"> {/* Link to the "sign-in" page */}
        <img src={signInImage} alt="Sign-in Procedures" style={serviceImage} />
        </Link>
        <p>
          Our sign-in procedures are designed for convenience and efficiency, ensuring a smooth start to each day.
        </p>
      </div>
      <div style={serviceItem}>
        <h3 style={serviceHeading}>Food Tracking</h3>
        <Link to="/NewFoodForm"> {/* Link to the "sign-in" page */}
        <img src={foodTrackingImage} alt="Food Tracking" style={serviceImage} />
        </Link>
        <p>
          We offer food tracking services to monitor and cater to individual dietary needs and preferences.
        </p>
      </div>
      <div style={serviceItem}>
        <h3 style={serviceHeading}>Attendance Services</h3>
        <Link to="/attendance"> {/* Link to the "sign-in" page */}
        <img src={attendanceImage} alt="Attendance Services" style={serviceImage} />
        </Link>
        <p>
          Our attendance services help keep track of your loved ones' participation in various activities throughout the day.
        </p>
      </div>
      
    </section>
  );
}

export default Services;
