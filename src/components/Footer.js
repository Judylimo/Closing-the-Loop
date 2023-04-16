import React from "react";
import "../styles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Copyright © 2023
          <a href="https://www.example.com" className="footer-link">
            {" "}
            WASTEAGE
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
