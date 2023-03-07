import React from 'react';
import './SideBar.css';
import profile from './SidebarProfile.jpg';

export default function SideBar() {
  return (
    <div className="sidebar-section">
      <div className="sidebar-subsection">
        <span className="sidebar-title">About me</span>
        <img className="sidebar-image" src={profile} alt="profile" />
        <p className="sidebar-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in ex
          cursus, convallis magna ac, luctus magna.
        </p>
      </div>
      <div className="sidebar-subsection">
        <span className="sidebar-title">categories</span>
        <ul className="sidebar-categories">
          <li className="sidebar-category">Buy</li>
          <li className="sidebar-category">Sell</li>
          <li className="sidebar-category">Rent</li>
          <li className="sidebar-category">Hostel</li>
          <li className="sidebar-category">B & B</li>
          <li className="sidebar-category">Hotel</li>
        </ul>
      </div>
      <div className="sidebar-subsection">
        <span className="sidebar-title">follow us</span>
        <div className="sidebar-social-icons">
          <i className="sidebar-social-icon fab fa-instagram"></i>
          <i className="sidebar-social-icon fab fa-facebook"></i>
          <i className="sidebar-social-icon fab fa-linkedin"></i>
          <i className="sidebar-social-icon fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}
