import React from 'react';
import './Songrow.css'

const SongRow=({track})=>{
    return <>
    <div className="song_row">
        <img src={track.album.images[0].url} 
        alt="song poster" />
      <div className="song_row_details">
          <h5>{track.name}</h5>
          <p>{track.artists.map((artist)=> artist.name).join(", ")}</p>
      </div>
    </div>
    </>
}
export default SongRow;