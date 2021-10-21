import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import DoctorsCard from './Dr.Card/DoctorsCard';

const Doctors = () => {

  const [doctors, setDoctors] = useState([]);
  console.log(doctors)
  useEffect(() => {
    fetch('./dr.data.json')
      .then(res => res.json())
      .then(data => setDoctors(data))
  }, [])

  return (
    <div className="container my-5">
      <div className="row gx-5">
        {
          doctors.map(doctor => <DoctorsCard key={doctor.id} doctor={doctor} />)
        }
      </div>
    </div>
  );
};

export default Doctors;