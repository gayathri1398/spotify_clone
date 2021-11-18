import React from 'react';
import SidebarOptions from './SidebarOptions';

// css files
import './Sidebar.css';

const Sidebar = () => {
    return<> 
        <div className="sidebar">
          <img className="sidebar__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwSDcPB5BiNYYBFYC9kcG8st464LzORMRsA&usqp=CAU" alt="" />
        </div>
        
        <SidebarOptions/>
    </>
}

export default Sidebar
