import React from 'react';
import './Songrow.css'

const SongRow=({track})=>{
    return <>
    <div className="song_row">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLtiig4-u_RnWIBStXAmGHgA2lpqIM13K4w&usqp=CAU" 
        alt="song poster" />
      <div className="song_row_details">
          <h5>{track.name}</h5>
          <p>{track.artists.map((artist)=> artist.name)}</p>
      </div>
    </div>
    </>
}
export default SongRow;