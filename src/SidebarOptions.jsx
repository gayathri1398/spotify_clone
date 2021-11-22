import React from 'react';
import './SidebarOptions.css';


const SidebarOptions=({Icon,title})=>{
  return <>
  <div className="SidebarOptions">
    <div className="SidebarOptions__details">
      
     { Icon && <Icon className="sidebar__icons"/>}
      {Icon?<h4>{title}</h4>:<p>{title}</p>}
    </div>
      <h1 className="sidebar__heading">Playlists</h1>
      <hr />
  </div>
 

  </>
}

export default SidebarOptions;