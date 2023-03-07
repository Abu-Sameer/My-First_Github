import React from 'react';
import './ListingItem.css';
import { NavLink } from 'react-router-dom';

export default function ListingItem() {
  return (
    <div className="listing-item">
      <img
        className="listing-image"
        src="https://images.pexels.com/photos/109479/pexels-photo-109479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="listingImg"
      />
      <div className="listing-details">
        <div className="listing-categories">
          <span className="listing-category">Buy</span>
          <span className="listing-category">Sell</span>
        </div>
        <NavLink to="/detail/1">
          <span className="listing-title">Awesome property</span>
        </NavLink>
        <hr />
        <span className="listing-time">2 days ago</span>
      </div>
      <p className="listing-discription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in ex
        cursus, convallis magna ac luctus magna. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Duis in ex cursus, convallis magna ac
        luctus magna. cursus, convallis magna ac luctus magna. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Duis in ex cursus, convallis
        magna ac luctus magna.
      </p>
    </div>
  );
}
