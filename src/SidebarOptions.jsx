import React from 'react';
import './SidebarOptions.css';
import Home from '@material-ui/icons/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';


const SidebarOptions=()=>{
  return <>
  <div className="SidebarOptions">
      <p className="sidebar__icons"><Home/>Home</p>
      <p className="sidebar__icons"><SearchIcon/>Search</p>
      <p className="sidebar__icons"><LibraryAddCheckIcon/>Library</p>
      <hr />
  </div>

  </>
}

export default SidebarOptions;