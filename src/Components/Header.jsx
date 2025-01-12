import React from 'react';
import './Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Replace with the actual SVG logo */}
        <img width='30px' src="./src/assets/logo.PNG" alt="Firstbench" className="logo-img" />
        <h1>Firstbench</h1>
      </div>
      <nav className="nav-links">
        <a href="#">
          <i className="bi bi-house"></i> Dashboard
        </a>
        <a href="#">
          <i className="bi bi-lightning-fill"></i> FirstGuru
        </a>
        <a href="#">
          <i className="bi bi-trash3"></i> TownHall
        </a>
        <a href="#">
          <i className="bi bi-lightning"></i> AI Evaluation
        </a>
        <a href="#">
          <i className="bi bi-graph-up-arrow"></i> Performance
        </a>
        <a href="#" className="text-info">
          <i className="bi bi-file-earmark-text"></i> Mock Test
        </a>
      </nav>
      <div className="right-section">
        <a href="#" className="notification">
          <i className="bi bi-bell"></i>
        </a>
        <div className="profile-dropdown">
          <i className="bi bi-person-square"></i> Profile
        </div>
      </div>
    </header>
  );
};

export default Header;
