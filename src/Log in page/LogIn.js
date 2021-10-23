import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../hooks/useAuth';
import { useHistory, useLocation } from "react-router";
import './login.css'


const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";
  console.log(redirect_uri)


  const { signInUsingGoogle, signInUserWithEmailAndPassword, } = useAuth()

  const handleEmail = e => setEmail(e.target.value);

  const handlePassword = e => setPassword(e.target.value);

  const cleanInputField = (id) => document.getElementById(id).value = '';

  const handleLogin = (e) => {
    e.preventDefault()
    signInUserWithEmailAndPassword(email, password)
      .then(result => {
        history.push(redirect_uri);
      })
      .catch(error => {
        setError(error.message)
      })

    cleanInputField('email');
    cleanInputField('password');

  }

  const handleGoogleSignIn = (e) => {
    e.preventDefault()
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri);

      })
  }

  return (
    <div className="login-form">
      <div className="shadow">
        <h2>Log in</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="your email" className="input-field" id="email" onBlur={handleEmail} />
          <br /><br />
          <input type="password" name="" id="" placeholder="password" className="input-field" id="password" onBlur={handlePassword} />
          <br /><br />
          <p className="text-danger mb-1">{error}</p>
          <button className="btn-regular"
            type="submit"
          // onClick={handleLogin}
          >
            Continue
          </button>
        </form>
        <hr />
        <button className="google-btn" onClick={handleGoogleSignIn}>

          <p className="flex">
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="" />
            <span> Login with google  </span>
          </p>

        </button>
        <p>New user?</p>
        <button><Link to="register">Create account</Link></button>
      </div>

    </div>
  )
};

export default LogIn;