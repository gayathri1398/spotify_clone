import React,{useStateValue} from 'react';
import SidebarOptions from './SidebarOptions';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from '@mui/icons-material/Search';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import {getTokenFromUrl} from './spotify'


// css files
import './Sidebar.css';

const Sidebar = () => {
const[{playlists},dispatch] = useStateValue();
// console.log(playlists);

    return<> 
        <div className="sidebar">
          <img className="sidebar__logo"
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwSDcPB5BiNYYBFYC9kcG8st464LzORMRsA&usqp=CAU"
            alt="spotify" />        
        <SidebarOptions Icon={HomeIcon} title="Home" />
        <SidebarOptions Icon={SearchIcon} title="Search" />
        <SidebarOptions Icon={LibraryAddCheckIcon} title="Library" />
        
         <h1 className="sidebar__heading">Playlists</h1>
         <hr/>
      {
          playlists?.items.map((playlist)=>(
               <SidebarOptions title={playlist.name}/>
          ))
      }
            
            {/* <SidebarOptions title="A.R.Rahman Hits"/>
            <SidebarOptions title="Harish Jayraj Hits"/>
            <SidebarOptions title="Aniruth  Hits"/> */}
      

         </div>  
    </>
}

export default Sidebar
