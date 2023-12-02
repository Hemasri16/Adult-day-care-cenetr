// src/components/Home.js
import React from 'react';
import dayCareImage from '../images/daycare.jpg'; // Replace with actual image URL

const Home = () => {
  return (
    <section style={heroStyle}>
      <div style={heroContent}>
        <h2 style={heroHeading}>Welcome to Our Center</h2>
        <p style={heroText}>
          Providing compassionate care and support for seniors. Our center is a warm and inviting place
          where your loved ones can enjoy a variety of activities and receive the care they deserve.
        </p>
      </div>
      <div style={heroImageContainer}>
        <img src={dayCareImage} alt="Day Care Center" style={heroImage} />
      </div>
    </section>
  );
}

export default Home;

// Styles
const heroStyle = {
  backgroundColor: '#ecf0f1',
  padding: '60px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const heroContent = {
  flex: '0 1 50%',
};

const heroHeading = {
  fontSize: '36px',
  marginBottom: '20px',
};

const heroText = {
  fontSize: '18px',
  lineHeight: '1.6',
};

const heroImageContainer = {
  flex: '0 1 40%',
};

const heroImage = {
  width: '100%',
  borderRadius: '8px',
};
