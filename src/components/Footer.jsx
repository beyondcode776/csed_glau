import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Assuming you have a CSS file for styling

export default function Footer() {
  return (
    <footer className="neo-footer">
      <div className="footer-grid">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="glow-text">CSED CLUB GLAU</h2>
          <p className="footer-tagline">Innovation Beyond Boundaries</p>
          
          
        </div>

        {/* Projects Section */}
        <div className="footer-section">
          <h3 className="section-title">OUR PROJECTS</h3>
          <div className="project-links">
            <Link to="/Projects" className="neo-link">
              <span className="link-icon">⟟</span>
              <span className="project-name">GrimeRover</span>
            </Link>
            <Link to="/Projects" className="neo-link">
              <span className="link-icon">⟟</span>
              <span className="project-name">Drone</span>
            </Link>
            <Link to="/Projects" className="neo-link">
              <span className="link-icon">⟟</span>
              <span className="project-name">RC Car</span>
            </Link>
            <Link to="/Projects" className="neo-link">
              <span className="link-icon">⟟</span>
              <span className="project-name">Aaroi</span>
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h3 className="section-title">EXPLORE</h3>
          <div className="page-links">
            <Link to="/" className="neo-link">
              <span className="link-icon">↠</span>
              <span className="page-name">Home</span>
            </Link>
            <Link to="/team" className="neo-link">
              <span className="link-icon">↠</span>
              <span className="page-name">Team</span>
            </Link>
            <Link to="/events" className="neo-link">
              <span className="link-icon">↠</span>
              <span className="page-name">Events</span>
            </Link>
            <Link to="/projects" className="neo-link">
              <span className="link-icon">↠</span>
              <span className="page-name">Projects</span>
            </Link>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="footer-section">
          <h3 className="section-title">CONNECT</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/csed_club_glau/" className="neo-link">
              <i className="fa-brands fa-instagram social-icon"></i>
              <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/csed-club-glau/posts/?feedView=all" className="neo-link">
              <i className="fa-brands fa-linkedin social-icon"></i>
              <span>LinkedIn</span>
            </a>
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <i className="fa-solid fa-location-dot contact-icon"></i>
              <span>GLAU, Mathura</span>
            </div>
            <a href="mailto:csed.club@gla.ac.in" className="contact-item">
              <i className="fa-solid fa-envelope contact-icon"></i>
              <span>csed.club@gla.ac.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <div className="copyright">
          &copy; 2025 CSED CLUB GLAU | All Rights Reserved
        </div>
        <div className="footer-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-dots">
            {[...Array(5)].map((_, i) => <div key={i} className="dot"></div>)}
          </div>
        </div>
      </div>
    </footer>
  );
}