import React from 'react';
import './ListingDetail.css';

export default function ListingDetail() {
  return (
    <div className="listing-detail">
      <div className="listing-detail-content">
        <img
          className="listing-detail-image"
          src="https://images.pexels.com/photos/109479/pexels-photo-109479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="detail_image"
        />

        <h2 className="listing-detail-title">
          Awesome property
          <div className="listing-detail-action">
            <i className=" listing-detail-edit fas fa-edit"></i>
            <i className=" listing-detail-trash fas fa-trash-alt"></i>
          </div>
        </h2>
        <div className="listing-detail-text">
          <p className="listing-detail-author">
            Author -{' '}
            <span className="listing-detail-author-name">
              Adesoye Abu-Sameer
            </span>
          </p>
          <p className="listing-detail-time">1 day ago</p>
        </div>
        <p className="listing-detail-information">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in ex
          cursus, convallis magna ac, luctus magna. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Duis in ex cursus, convallis magna ac,
          luctus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis in ex cursus, convallis magna ac, luctus magna. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Duis in ex cursus, convallis
          magna ac, luctus magna. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis in ex cursus, convallis magna ac, luctus magna.
          Lorem ipsum dolor sit amet, magna. Lorem ipsum dolor sit amet,
          consectetur magna ac, luctus magna. Lorem ipsum dolor sit amet,
          consectetur magna ac, luctus magna. Lorem ipsum dolor sit amet,
          consectetur magna ac, luctus magna. luctus magna. Lorem ipsum dolor
          sit amet Lorem ipsum dolor sit amet...
        </p>
      </div>
    </div>
  );
}
