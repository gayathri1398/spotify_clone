import React from 'react';
import SidebarOptions from './SidebarOptions';
// import Home from '@material-ui/icons/Home';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from '@mui/icons-material/Search';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';



// css files
import './Sidebar.css';

const Sidebar = () => {
    return<> 
        <div className="sidebar">
          <img className="sidebar__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwSDcPB5BiNYYBFYC9kcG8st464LzORMRsA&usqp=CAU" alt="" />
        </div>
        
        <SidebarOptions Icon={HomeIcon} title="Home" />
        <SidebarOptions Icon={SearchIcon} title="Search" />
        <SidebarOptions Icon={LibraryAddCheckIcon} title="Library" />
      
    </>
}

export default Sidebar
