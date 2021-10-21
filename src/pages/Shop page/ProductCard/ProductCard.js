import React from 'react';

const ProductCard = ({ product }) => {
  const { img, name, category, price } = product;
  return (

    <div className="col-md-3">
      <img src={img} alt="" className="img-fluid" style={{ width: '220px', height: '220px' }} />
      <div className="d-flex justify-content-around ">
        <h5 >{name}</h5>
        <p className="fs-5">${price}</p>
      </div>
      <p className="text-start ms-4" style={{ lineHeight: '0px' }}>{category}</p>


    </div>

  );
};

export default ProductCard;