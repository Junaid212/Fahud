import React from 'react';
import Link from 'next/link';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const FooterNew = () => {
  return (
    <footer id="footer">
      
      {/* Background Branding Elements */}
      <div className="footer-circle"></div>
      
      <div className="footer-logo-overlay">
        {/* <img 
          src="/images/fd.png" 
          alt="FAHUD Background Logo" 
        /> */}
      </div>

      <div className="footer-faded-text">
        
        <h1>
  <LuArrowUpRight className="footer-arrow-icon" />
  <span>Fahud</span>
</h1>
      </div>

      {/* Main Content */}
      <div className="footer-container">
        
        <div className="footer-grid">
          
          {/* Left Section (Newsletter) */}
          <div className="footer-newsletter footer-space-y-4">
            <h2>Stay Updated</h2>
            
            <form className="footer-form">
              <input 
                type="email" 
                placeholder="example@gmail.com" 
                className="footer-input"
                required
              />
              <button 
                type="submit" 
                className="footer-button"
              >
                Subscribe
              </button>
            </form>
            
            <p className="footer-description">
              Your trusted partner for industrial safety products, PPE equipment, and technical solutions across Oman.
            </p>
            <div className="footer-social">
            <a href="#" className="footer-social-link">
              <FaInstagramSquare size={24} strokeWidth={2} />
            </a>
            <a href="#" className="footer-social-link">
              <FaFacebookSquare size={24} strokeWidth={2} />
            </a>
            <a href="#" className="footer-social-link">
              <FaLinkedin size={24} strokeWidth={2} />
            </a>
          </div>
          </div>
          

          {/* Middle Left (Quick Links) */}
          <div className="footer-pt-4 footer-space-y-6">
            <h3 className="footer-section-header">Contact Us</h3>
            <ul className="footer-contact-list">
  <li className="footer-contact-item">
    <FaMapMarkerAlt className="footer-icon" />
    <div>
      <p><b>Head Office</b></p>
      <p>Fahud, Ad Dhahirah Governorate, Sultanate of Oman</p>
    </div>
  </li>

  <li className="footer-contact-item">
    <FaMapMarkerAlt className="footer-icon" />
    <div>
      <p><b>Muscut Office</b></p>
      <p>Al Khuwair, Muscat, Oman</p>
    </div>
  </li>

  <li className="footer-contact-item">
    <FaEnvelope className="footer-icon" />
    <p>info@fahudoman.com</p>
  </li>

  <li className="footer-contact-item">
    <FaPhoneAlt className="footer-icon" />
    <p>+968 2447 8888</p>
  </li>
</ul>
          </div>

          {/* Middle Right (Services) */}
          <div className="footer-pt-4 footer-space-y-6">
            <h3 className="footer-section-header">Services</h3>
            <ul className="footer-link-list">
              {['Safety PPE Equipment', 'Industrial Fasteners', 'Welding Consumables', 'Lifting Solutions', 'Metal Fabrication', 'Safety Training'].map((service, idx) => (
                <li key={idx} className="footer-link-item">
                  <span className="footer-link-bullet"></span>
                  <span className="footer-link-text">{service}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 FAHUD Safety & Technical Trading. Site by  <a href="https://brightmedia.tech" target="_blank" style={{color:'#F59E0B'}}>Bright Media<LuSquareArrowOutUpRight className='footer-arrow-icon'/></a>
          </p>
          
          <div className="footer-social">
            <a href="/about-1" className="footer-social-link">
              <p>About Us</p>
            </a>
            <a href="/products" className="footer-social-link">
              <p>Products</p>
            </a>
            <a href="/contact" className="footer-social-link">
              <p>Contact Us</p>
            </a>
          </div>
        </div>
        
      </div>
      <style>{`
        /* FooterNew.css */

/* Base Footer Styles */
#footer {
  position: relative;
  background-color: #f9f3ea;
  color: #111827;
  overflow: hidden;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  padding-top: 3rem;
  padding-bottom: 0.2rem;
  width: 100%;
  z-index: 0;
}

/* Background Branding Elements */

/* 1. Large faded circular shape */
.footer-circle {
  position: absolute;
  top: 65%;
  left: 55%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  pointer-events: none;
  z-index: -10;
}

/* 2. Company logo inside the circle overlay */
.footer-logo-overlay {
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -70%);
  pointer-events: none;
  z-index: -10;
  opacity: 0.4;
}

.footer-logo-overlay img {
  width: 12rem;
  object-fit: contain;
  mix-blend-mode: multiply;
}

/* 3. Huge faded text */
.footer-faded-text {
  position: absolute;
  inset: 0;
  bottom: 3rem;
  display: flex;
  justify-content: center;
  pointer-events: none;
  z-index: 20;
  overflow: hidden;
}

.footer-faded-text h1 {
  font-size: 350px !important;
  line-height: 2.55;
  font-weight: 900;
  color: #032B4A;
  opacity: 1;
  // text-transform: uppercase;
  letter-spacing: 0.02em;
  margin: 0;
  padding: 0;
  text-align: center;
  user-select: none;
  width: 100%;
  white-space: nowrap;
  font-family: Franklin Gothic Medium !important;
}

/* Main Content Container */
.footer-container {
  position: relative;
  z-index: 10;
  max-width: 99% !important;
  margin: 0 auto;
  padding: 0 0.1rem;
}

/* Grid Layout */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 6rem;
  margin-bottom: 12rem;
}

/* Left Section (Newsletter) */
.footer-newsletter {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  gap: 1.5rem;
}

.footer-newsletter h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #032B4A;
  letter-spacing: -0.025em;
  margin: 0;
}

/* Newsletter Form */
.footer-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 32rem;
  width: 100%;
  z-index: 20;
}

.footer-input {
  flex-grow: 1;
  padding: 0.5rem !important;
  border-radius: 0.5rem;
  border: 1px solid #7777774f;
  background-color: rgba(101, 98, 97, 0.22);
  backdrop-filter: blur(4px);
  font-size: 1rem;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.footer-input:focus {
  outline: none;
  border-color: #f59e0b;
  box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.5);
}

.footer-input::placeholder {
  color: #6b7280;
}

.footer-button {
  padding: 0.1rem 2rem;
  background-color: #f59e0b;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.footer-button:hover {
  background-color: #f97316;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.footer-description {
  color: #374151;
  font-size: 1rem !important;
  line-height: 1.625;
  max-width: 32rem;
  font-weight: 500;
}

/* Section Headers */
.footer-section-header {
  font-size: 1.2rem;
  font-weight: 700;
  color: #f59e0b;
  margin-bottom: 1.5rem;
}

/* Link Lists */
.footer-link-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link-item {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.footer-link-bullet {
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.75rem;
  margin-top: 0.125rem;
  transition: all 0.3s;
}

.footer-link-item:hover .footer-link-bullet {
  background-color: #f59e0b;
  transform: scale(1.25);
}

.footer-link {
  color: black;
  font-size: 1rem;
  font-weight: 500 !important;
  text-decoration: none;
  transition: color 0.2s;
  text-transform: capitalize;
}

.footer-link:hover {
  color: #f59e0b;
}

.footer-link-text {
  color: black;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

.footer-link-text:hover {
  color: #f59e0b;
}

/* Bottom Bar */
.footer-bottom {
  // padding-top: 0.1rem;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  margin-top: 3rem;
  position: relative;
  z-index: 20;
}

.footer-copyright {
  font-size: 14px;
  color: #1f2937;
  font-weight: 500;
  text-align: center;
}

.footer-social {
  display: flex;
  gap: 1.5rem;
}

.footer-social-link {
  color: black;
  transition: all 0.2s;
}

.footer-social-link:hover {
  color: #f59e0b;
  transform: scale(1.1);
}

/* Utility Classes */
.footer-pt-4 {
  padding-top: 1rem;
}

.footer-space-y-6 > * + * {
  margin-top: 1.5rem;
}

.footer-space-y-8 > * + * {
  margin-top: 2rem;
}

/* Media Queries */
@media (min-width: 640px) {
  .footer-container {
    padding: 0 1.5rem;
  }
  
  .footer-form {
    flex-direction: row;
  }
  
  .footer-faded-text h1 {
    font-size: 580px;
  }
}

@media (min-width: 768px) {
  .footer-faded-text h1 {
    font-size: 580px;
  }
  
  .footer-circle {
    width: 600px;
    height: 600px;
  }
  
  .footer-logo-overlay img {
    width: 16rem;
  }
  
  .footer-description {
    font-size: 1.125rem;
  }
}

@media (min-width: 1024px) {
  .footer-container {
    padding: 0 2rem;
  }
  
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-newsletter {
    grid-column: span 2;
  }
  
  .footer-circle {
    width: 700px;
    height: 700px;
  }
  
  .footer-logo-overlay img {
    width: 20rem;
  }
  
  .footer-pl-12 {
    padding-left: 3rem;
  }
  
  .footer-pl-4 {
    padding-left: 1rem;
  }
  
  .footer-bottom {
    flex-direction: row;
  }
  
  .footer-copyright {
    text-align: left;
  }
}

@media (min-width: 1280px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .footer-newsletter {
    grid-column: span 2;
  }
}

/* Responsive Typography */
@media (min-width: 1024px) {
  .footer-newsletter h2 {
    font-size: 4.5rem;
  }
}

.footer-contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 14px;
  color: #333;
  font-size: 14px;
}

.footer-contact-item strong {
  display: block;
  font-weight: 600;
  margin-bottom: 2px;
}

.footer-contact-item p {
  margin: 0;
  line-height: 1.4;
}

.footer-icon {
  color: #f59e0b;
  font-size: 16px;
  margin-top: 3px;
  flex-shrink: 0;
}
.footer-arrow-icon {
  display: inline;
  font-size: 1em;
  vertical-align: middle;
  margin-right: 0em;
}

/* Ensure the main Fahud arrow is red as in the image */


/* --- MOBILE SPECIFIC STYLES (max-width: 786px) --- */
@media (max-width: 786px) {
  .footer-newsletter h2 {
    font-size: 3rem !important;
    margin-bottom: 0.5rem;
  }
  
  /* Make input and button side-by-side */
  .footer-form {
    flex-direction: row !important;
    gap: 0.5rem;
  }
  
  .footer-input {
    width: auto !important;
    flex: 1;
    padding: 0.75rem 0.5rem !important;
    font-size: 0.95rem;
  }
  
  .footer-button {
    padding: 0.5rem 1rem !important;
    font-size: 0.95rem;
  }

  /* Adjust description spacing */
  .footer-description {
    font-size: 14px !important;
    line-height: 1.4;
    max-width: 100%;
  }

  /* Hide services and social icons to match the mobile screenshot layout exactly */
  .footer-newsletter .footer-social,
  .footer-bottom .footer-social,
  .footer-grid > :nth-child(3) {
    display: none !important;
  }

  /* Adjust circle positioning */
  .footer-circle {
    width: 450px !important;
    height: 450px !important;
    top: 45% !important;
  }

  /* Adjust grid spacing */
  .footer-grid {
    gap: 2.5rem;
    margin-bottom: 4rem;
  }

  /* Make Fahud text and arrow huge but fit proportionally at bottom */
  .footer-faded-text {
    // bottom: -15px !important;
  }
  
  .footer-faded-text h1 {
    font-size: 110px !important;
    line-height: 11.2 !important;
  }

  /* Manage spacing for bottom bar */
  .footer-bottom {
    margin-top: 6rem !important;
    padding-top: 0.5rem !important;
  }
  
  .footer-copyright {
    font-size: 11px !important;
  }
}
      `}</style>
    </footer>
  );
};

export default FooterNew;