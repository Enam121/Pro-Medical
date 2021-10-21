import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';
import Appointment from '../Appointment/Appointment';
import Gallery from '../Gallery/Gallery';
import './home.css'

const Home = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>
      {/* home banner */}
      <div className="banner d-flex flex-column align-items-center justify-content-center ">

        <div className="text-light">
          <h1>WELLCOME TO PRO MEDICAL</h1>
        </div>
      </div>

      {/* home cards */}
      <div className="card-container ">
        <div className="row gy-5">
          {
            services.map(service => <ServiceCard key={service.id} service={service} />)
          }
        </div>
      </div>

      {/* gallery */}
      <div className="gallery-container">
        <Gallery />
      </div>

      {/* appointment */}
      <div className="ap-container my-5">
        <Appointment />
      </div>
    </div>
  );
};

export default Home;