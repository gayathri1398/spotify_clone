import React from 'react'
import logo from "./images/logo.png";

const Login = () => {
    return <>(
        <div classname="nav">
        <div className="logo">
         <img src={logo} alt="Spotify"/>
         <h1 className="heading">Spotify</h1>
        </div>
        <div className="signup">
            <a href="">sign up</a>
            <a href="">Login</a>
        </div>
        </div>
    )
    </>
}

export default Login
