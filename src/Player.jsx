import React from 'react';

// components
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer'

// css files
import './Player.css';


const Player = ({spotify}) => {
    return (
        <>
        <div className="player">
            <div className="player__body">
            <Sidebar/>
            <Body/>
            
           </div>
        
            <Footer/>
        </div>
        </>
    )
}

export default Player
