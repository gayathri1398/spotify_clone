import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@material-ui/core';
import {useDataLayerValue} from './DataLayer'
import './Header.css';


const Header =()=>{
const[{user}, dispatch] = useDataLayerValue();
console.log({user});

return <>
   <div className="header">
        <div className="header__search">
        <SearchIcon/>
        <div className="header__input">
            <input type="search"   placeholder="Search for artist,songs,albums" />
            </div>
  </div>
    <div className="header__avatar__info">
    <Avatar
    alt="gayu"
    src={user?.images[0].url}
        style={{
       
        width: "30px",
        height: "30px",
      }} 
    />
    <h3>{user?.display_name}</h3>
    </div>

   </div>
</>
}

export default Header;