import React from 'react';
import './SidebarOptions.css';


const SidebarOptions=({Icon,title})=>{
  return <>
  <div className="SidebarOptions">
     {Icon && <Icon className="sidebar__icons"/>}
     {Icon?<h4>{title}</h4>:<p>{title}</p>}
  </div>
  </>
}

export default SidebarOptions;