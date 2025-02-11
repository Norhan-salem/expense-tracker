import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaArrowUp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/footer.css";

/**
 * Footer Component
 *
 * Displays the application footer with branding, social media links, 
 * a back-to-top button, and copyright information.
 *
 * @returns {JSX.Element} The Footer section.
 */
const Footer = () => {
  return (
    <footer className="bg-dark-teal text-off-white py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Brand Section */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h2 className="text-off-white">ExpenseTracker</h2>
            <p className="text-muted-gray mb-0">Track your expenses effortlessly.</p>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 d-flex justify-content-center gap-3">
            <a href="https://github.com/Norhan-salem/expense-tracker" className="text-neon-yellow fs-4"><FaFacebook /></a>
            <a href="https://github.com/Norhan-salem/expense-tracker" className="text-neon-yellow fs-4"><FaTwitter /></a>
            <a href="https://github.com/Norhan-salem/expense-tracker" className="text-neon-yellow fs-4"><FaInstagram /></a>
            <a href="https://github.com/Norhan-salem/expense-tracker" className="text-neon-yellow fs-4"><FaGithub /></a>
          </div>

          {/* Back to Top Button */}
          <div className="col-md-4 text-center text-md-end mt-3 mt-md-0">
            <button 
              className="btn btn-outline-light" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <FaArrowUp />
            </button>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center mt-3">
          <p className="text-muted-gray m-0">
            &copy; {new Date().getFullYear()} ExpenseTracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
