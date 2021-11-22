import React from 'react';
import './Footer.css'

const Footer =()=>{
    return (
    <>
    <div className="footer">
      <div className="footer__left">
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYcpbaSbDcX7dIPCuVCbbkurlFi-Hr03dJQ&usqp=CAU" alt="photo"/>
        <div className="footer__details">
        <h4>Playingsong</h4>
        <p>artist</p>
        </div>
    </div>
    <div className="footer__center">

    </div>
    <div className="footer__right">
        <p>volume</p>
    </div>
    </div>
    </>
    )
}

export default Footer;