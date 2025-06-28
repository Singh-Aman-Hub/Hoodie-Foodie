import React from 'react';
import './Footer.css'; // Optional if you want custom styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>Site Made with Love- All rights reserved &copy; {new Date().getFullYear()}: Aman</p>
    </footer>
  );
};

export default Footer;