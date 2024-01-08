// Footer.jsx

import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Your description about the company or website.</p>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <p>&copy; 2024 Gotan.in All rights reserved.</p>
    </div>
  );
};

export default Footer;
