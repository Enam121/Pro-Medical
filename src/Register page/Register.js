import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../hooks/useAuth';


const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { signInUsingGoogle, registerUserWithEmailAndPassword, } = useAuth()

  const handleEmail = e => setEmail(e.target.value);

  const handlePassword = e => setPassword(e.target.value);

  const cleanInputField = (id) => document.getElementById(id).value = '';

  const handleSignup = (e) => {
    e.preventDefault()
    registerUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result.user)

      })
      .catch(error => {
        setError(error.message)
      })

    cleanInputField('email');
    cleanInputField('password');
    cleanInputField('re-enter-password');
    cleanInputField('name');

  }

  const handleGoogleSignIn = (e) => {
    e.preventDefault()
    signInUsingGoogle()
      .then(result => {
        console.log(result.user)

      })
  }

  return (
    <div className="login-form">
      <div className="shadow">
        <h2>Create Account</h2>
        <form onSubmit={handleSignup}>
          <input type="text" name="" placeholder="Enter your name" className="input-field" id="name" />
          <br /><br />
          <input type="email" placeholder="Enter your email address" className="input-field" id="email" onBlur={handleEmail} />
          <br /><br />
          <input type="password" name="" placeholder="password (at least 6 charecter)" className="input-field" id="password" onBlur={handlePassword} />
          <br /><br />
          <input type="password" name="" placeholder="Re-enter-password " className="input-field" id="re-enter-password" />
          <br /><br />
          <p className="text-danger mb-1">{error}</p>
          <button className="btn-regular " type="submit"
          >
            Submit
          </button>
        </form>
        <hr />
        <button className="google-btn" onClick={handleGoogleSignIn}>
          <p className="flex">
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="" />

            <span> Signup with google  </span>
          </p>
        </button>
        <p>Already have an account? <Link to="login">Please login</Link>
        </p>
      </div>

    </div>
  );
};

export default Register;