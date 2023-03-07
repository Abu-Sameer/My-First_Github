import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="header-section">
      <div className="hero-text">
        <span className="hero-text-title">property listing</span>
        <span className="hero-text-subtitle">MarketPlace</span>
      </div>
      <img
        className="hero-image"
        src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="name"
      />
    </div>
  );
}
