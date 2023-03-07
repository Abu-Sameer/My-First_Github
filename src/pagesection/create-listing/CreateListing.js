import React from 'react';
import './CreateListing.css';

export default function CreateListing() {
  return (
    <div className="create-listing">
      <form className="create-listing-form">
        <div className="create-listing-form-group">
          <input
            autoFocus={true}
            type="text"
            placeholder="Property title"
            className="create-listing-text"
          />
          <label htmlFor="listingImg" className="create-listing-img-upload">
            <i className=" upload-icon fas fa-upload "></i>
          </label>
          <input type="file" id="listingImg" style={{ display: 'none' }} />
        </div>
        <div className="create-listing-form-group">
          <textarea
            className="create-listing-text-create-lisitng-description"
            placeholder="Property discription"
          ></textarea>
        </div>
      </form>
      <button className="create-lisitng-button">Submit</button>
    </div>
  );
}
