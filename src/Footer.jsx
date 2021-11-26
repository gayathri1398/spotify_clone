import React from 'react';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';

// css 
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
       <ShuffleIcon className="footer__green"/>
       <SkipPreviousIcon/>
       <PlayCircleFilledIcon fontSize="large" className="footer__play"/>
       <SkipNextIcon/>
       <RepeatIcon/>

    </div>
    <div className="footer__right">
        <p>volume</p>
    </div>
    </div>
    </>
    )
}

export default Footer;