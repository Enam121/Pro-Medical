import React from 'react';
import './gallery.css'

const Gallery = () => {
  return (
    <div className="row">
      <div className="col-lg-3">
        <div className="row gy-4 ">
          <div className="col-12">
            <img src="https://promedica.qodeinteractive.com/wp-content/uploads/2020/12/h7-gallery-img-1-650x650.jpg" alt="" className="img-fluid img-anim img-anim" />
          </div>
          <div className="col-12 ">
            <img src="https://promedica.qodeinteractive.com/wp-content/uploads/2020/12/h7-gallery-img-2-650x650.jpg" alt="" className="img-fluid img-anim" />
          </div>
        </div>
      </div>
      <div className="col-lg-3 ">
        <img src="https://promedica.qodeinteractive.com/wp-content/uploads/2020/12/h7-gallery-img-3-650x1300.jpg" alt="" className="img-fluid img-anim" />
      </div>
      <div className="col-lg-3">
        <div className="row gy-4 ">
          <div className="col-12">
            <img src="https://promedica.qodeinteractive.com/wp-content/uploads/2020/12/h7-gallery-img-4-650x650.jpg" alt="" className="img-fluid img-anim" />
          </div>
          <div className="col-12">
            <img src="https://promedica.qodeinteractive.com/wp-content/uploads/2020/12/h7-gallery-img-5-650x650.jpg" alt="" className="img-fluid img-anim" />
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <img src="https://promedica.qodeinteractive.com/wp-content/uploads/2020/12/h7-gallery-img-6-650x1300.jpg" alt="" className="img-fluid img-anim" />
      </div>
    </div>
  );
};

export default Gallery;