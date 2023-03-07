import React from 'react';
import Header from '../../component/Header/Header';
import Listing from '../../component/Listing/Listing';
import SideBar from '../../component/SideBar/SideBar';
import './Home.css';

export default function home() {
  return (
    <div>
      <Header />
      <div className="home-page">
        <Listing />
        <SideBar />
      </div>
    </div>
  );
}
