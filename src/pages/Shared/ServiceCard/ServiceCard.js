import React from 'react';
import { useHistory } from 'react-router';
import './serviceCard.css'

const ServiceCard = ({ service }) => {
  const { serviceTitle, description, img, id } = service;
  const history = useHistory();

  const handleServiceDetail = () => {
    history.push(`/service-card/${id}`)
  }

  return (
    <div className="col-lg-4">

      <div class="card h-100" style={{ width: '300px' }}>
        <img src={img} class="card-img-top img-anim" alt="..." style={{ width: '299px', height: '200px' }} />
        <div class="card-body">
          <h5 class="card-title">{serviceTitle}</h5>
          <p class="card-text">{description.slice(0, 59)}...</p>
          <button className="btn btn-light" onClick={handleServiceDetail}>
            See details
            <img src="https://img.icons8.com/material-outlined/16/000000/plus-math--v1.png" alt="" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default ServiceCard;