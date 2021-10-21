import React from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'

const Appointment = () => {
  return (
    <>
      <h2 className="mb-4">Book an Appoinment</h2>
      <div className="row g-4">


        <div class="col-md-6">
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Depertment</option>
            <option value="1">Cardiac Surgery</option>
            <option value="2">Cardiology</option>
            <option value="3">Neurology</option>
            <option value="4">Gynecology</option>
            <option value="5">Orthopedics</option>
          </select>
        </div>
        <div class="col-md-6">
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Doctor</option>

          </select>
        </div>


        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Your Full Name" aria-label="Your Full Name" />
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Your Phone" aria-label="Your Phone" />
        </div>

        <div className="col-md-6">
          <div className="mx-2 border border-light border-bottom-0  rounded-2 fs-5 " >

            <DatePickerComponent
              placeholder="Select date"
              format="dd-MMM-yy"
              className="fs-5"
            />

          </div>
        </div>

      </div>

      <button className="booking-btn fs-4 rounded-pill border border-secondary">Book Now</button>

    </>
  );
};

export default Appointment;