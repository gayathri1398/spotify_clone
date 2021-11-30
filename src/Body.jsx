import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import DownloadIcon from '@mui/icons-material/Download';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDataLayerValue } from './DataLayer';
import './Body.css';

// components
import Header from './Header';

const Body = ({spotify}) => {
  const[{discover_weekly},dispatch] = useDataLayerValue();
  console.log(discover_weekly);

    return (
        <div className="body">
           <div className="body__header">
             <Header spotify={spotify}/>
             <div className="body__banner">
                <img src={discover_weekly?.images[0].url }
                  alt="discover weekly" />
                <div className="body__banner__info">
                   <strong>PLAYLISTS</strong>
                  <h1>{discover_weekly?.name}</h1>
                  <p> {discover_weekly?.description}</p>
                </div>
             </div>
           </div>
      
           <div className="body__icons">
             <PlayCircleIcon fontSize="large"/>
             <DownloadIcon/>
             <MoreHorizIcon/>
           </div>
        </div>
    )
}

export default Body
