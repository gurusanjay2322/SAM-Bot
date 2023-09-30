import React from 'react';
import google from '/google.png';
import "../index.css";

export const Login = () => {
  return (
    <div id='login-page'>
      <h2 style={{color:'grey'}}>Substation Asset Maintenance Assisstant</h2>
      <a href='http://localhost:3000/auth/google' id="login-google">
        <img
          src={google}
          alt='sign in with google'
          height={40}
        />
        <p>Sign-in with google</p>
      </a>
    </div>
  );
}
