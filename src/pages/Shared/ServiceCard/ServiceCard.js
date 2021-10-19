import React from 'react';
import './serviceCard.css'

const ServiceCard = ({ service }) => {
  const { serviceTitle, description, img } = service;

  return (
    <div className="col-lg-4">

      <div class="card h-100" style={{ width: '300px' }}>
        <img src={img} class="card-img-top" alt="..." style={{ width: '299px', height: '200px' }} />
        <div class="card-body">
          <h5 class="card-title">{serviceTitle}</h5>
          <p class="card-text">{description.slice(0, 59)}...</p>
          <button className="btn btn-light">See details</button>
        </div>
      </div>

    </div>
  );
};

export default ServiceCard;