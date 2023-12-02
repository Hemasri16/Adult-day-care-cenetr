// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'; // Replace with actual logo image URL

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoContainer}>
        <img src={logo} alt="Day Care Center Logo" style={logoStyle} />
        <h1 style={logoText}>Adult Day Care Center</h1>
      </div>
      <nav style={navStyle}>
        <Link to="" style={navLinkStyle}>Home</Link>
        <Link to="/services" style={navLinkStyle}>Services</Link>
        <Link to="/contact" style={navLinkStyle}>Contact</Link>
        
        
      </nav>
    </header>
  );
}

export default Header;

// Styles
const headerStyle = {
  backgroundColor: '#2c3e50',
  color: '#ecf0f1',
  padding: '15px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoContainer = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  width: '40px',
  height: '40px',
  marginRight: '10px',
  borderRadius: '50%',
};

const logoText = {
  margin: 0,
  fontSize: '24px',
};

const navStyle = {
  display: 'flex',
  gap: '20px',
};

const navLinkStyle = {
  color: '#ecf0f1',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
  transition: 'color 0.3s ease-in-out',
};

const activeLinkStyle = {
  color: '#3498db',
};

// Add activeLinkStyle to Link component when it's active
// Example: <Link to="/home" style={navLinkStyle} activeStyle={activeLinkStyle}>Home</Link>
