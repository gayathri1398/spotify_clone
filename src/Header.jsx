import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@material-ui/core';
import './Header.css'

const Header =()=>{
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
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
        />
    <h3>Gayathri</h3>
    </div>

   </div>
</>
}

export default Header;