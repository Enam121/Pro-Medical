import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';

const ServiceDetail = () => {
  const { cardId } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  const service = services?.find(services => services.id == cardId)
  console.log(services);
  return (
    <div>
      <div className="card card-container mt-3 h-100" style={{ marginBottom: '100px' }} >
        <div className="row g-0 ">
          <div className="col-md-7 ms-0">
            <img src={service?.img} className="img-fluid rounded-start" alt="..." style={{ height: '345px', width: '600px' }} />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h2 className="card-title">Name:{service?.serviceTitle}</h2>
              <p className="card-text text-justify" ><b>Discription:</b>{service?.description}</p>
              <h3 className="card-text">Cost: ${service?.Test_Cost}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;