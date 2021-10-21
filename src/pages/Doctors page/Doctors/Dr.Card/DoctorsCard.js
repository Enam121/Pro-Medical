import React from 'react';
import './doctorsCard.css'

const DoctorsCard = ({ doctor }) => {

  const { name, img, specialist } = doctor;

  return (

    <div className="col-lg-3 doctor">
      <img src={img} alt="" className="img-fluid mb-3" />
      <h5>{name}</h5>
      <p>{specialist}</p>
    </div>


  );
};

export default DoctorsCard;