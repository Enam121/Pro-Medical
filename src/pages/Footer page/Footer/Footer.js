import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer-container ">
        <div className="row">
          <div className="col">
            <h2 className="pb-4"><span className="color">Pro</span>Medical</h2>
            <p>
              If you need expert medical advice, you are welcome to contact us at ProMedical any time. Our lines are open 24/7.
            </p>
            <p>
              + 08002466 7921 <br />
              Email us: ProMedical@hotmail.com
            </p>
          </div>

          <div className="col d-flex justify-content-center align-items-center fs-5">
            <Link className="nav-link active " aria-current="page" to="/home">Home</Link>
            <Link className="nav-link" to="/doctors">Doctors</Link>
            <Link className="nav-link" to="/shop">Shop</Link>

          </div>

          <div className="col">
            <h4 className="pb-4">Working hours</h4>
            <p>Mon – Fri: 9 a.m. – 5 p.m.
              Sat – Sun: Closed</p>

            <p>
              650 Birmingham St,
              United State Of Noakhali
            </p>
            <div className="d-flex ms-5 align-items-center ">
              <div>
                <p className="fs-5 my-0"> Follow us:</p>
              </div>
              <div className="text-white icon-container">
                <img src="https://img.icons8.com/material-outlined/16/000000/facebook-circled--v2.png" alt="" className="ms-4 bg-light rounded-1" />
                <img src="https://img.icons8.com/ios-glyphs/16/000000/twitter.png" alt="" className="ms-3 bg-light rounded-2" />
                <img src="https://img.icons8.com/ios/16/000000/instagram-new.png" alt="" className="ms-3 bg-light rounded-2" />
                <img src="https://img.icons8.com/ios-glyphs/16/000000/linkedin-2.png" alt="" className="ms-3 bg-light rounded-2" />
              </div>
            </div>
          </div>

        </div>

        <hr className="mt-5" />
        <p className="mt-5">
          Copyright © 2021 All Rights Reserved by <span className="color">ProMedical</span>
        </p>
      </div>
    </>
  );
};

export default Footer;