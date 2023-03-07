import React from 'react';
import ListingDetail from '../../component/ListingDetailInfo/ListingDetail';
import SideBar from '../../component/SideBar/SideBar';
import './Details.css';

export default function Details() {
  return (
    <div className="detail-page">
      <ListingDetail />
      <SideBar />
    </div>
  );
}
