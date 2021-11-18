import React from 'react';
import './SidebarOptions.css';
import Home from '@material-ui/icons/Home'

const SidebarOptions=({title,Icon})=>{
  return <>
  <div className="SidebarOptions">
      <p Icon={Home}>Home</p>
      <p>Search</p>
      <p>Your Library</p>
  </div>
  </>
}

export default SidebarOptions;