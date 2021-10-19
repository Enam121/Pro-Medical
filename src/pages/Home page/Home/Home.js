import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';
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
          <h2>This is Home page</h2>
          <h1>WELLCOME TO ...</h1>
        </div>
      </div>
      {/* home cards */}
      <div className="card-container ">
        <div className="row gy-5">
          {
            services.map(service => <ServiceCard service={service} />)
          }
        </div>
      </div>

    </div>
  );
};

export default Home;