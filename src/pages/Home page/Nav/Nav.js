import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Nav = () => {

  const { user, logOut } = useAuth();
  console.log(user)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 py-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><span style={{ fontWeight: 600, color: '#081229' }}>Pro</span> <span style={{ color: '#ff7979', fontFamily: 'cursive' }}>Medical</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active " aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/doctors">Doctors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        {
          user ?

            <div className=" d-flex align-items-center">
              <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/30/000000/external-user-interface-kiranshastry-lineal-color-kiranshastry-1.png" alt="" />
              <span className="user-name">{user?.displayName}</span>
              <button onClick={logOut} >Logout</button>
            </div>
            : <Link to="/login">
              <button className="btn btn-secondary px-5">Login</button>
            </Link>
        }
      </div>
    </nav>
  );
};

export default Nav;