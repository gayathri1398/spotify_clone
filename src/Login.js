import React from 'react'
import logo from "./images/logo.png";
import { accessUrl } from './spotify';

const Login = () => {
    return <>
        <div classname="nav">
        <div className="logo">
         <img src={logo} alt="Spotify"/>
         <h1 className="heading">Spotify</h1>
        </div>

        <div className="signup">
            <a href="">sign up</a>
            <a href={accessUrl}>Login</a>
        </div>
        </div>
    
    </>
}

export default Login
