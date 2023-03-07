import React from 'react';
import ListingItem from '../Listing-item/ListingItem';
import './Listing.css';

export default function Listing() {
  return (
    <div className="listing-section">
      <ListingItem />
      <ListingItem />
      <ListingItem />
      <ListingItem />
      <ListingItem />
      <ListingItem />
    </div>
  );
}
