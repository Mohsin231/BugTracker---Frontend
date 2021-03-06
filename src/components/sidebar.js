import React from 'react';
import {Link} from 'react-router-dom'

function Sidebar(props) {
    return (
        <div className = 'sidebar'>
            <Link className='nav' to='/'> <h1 className="title"> Bug Tracker</h1></Link>
            <ul>
                <li><Link to="/dashboard" className='nav'>DashBoard</Link></li>
                <li><Link to="/viewbugs" className='nav'>View Bugs</Link></li>
                <li><Link to="/createbug" className='nav'>Create Bug</Link></li>
            </ul>

            <button className = 'logout'> LogOut</button>

{/* 
            <ul>
                <li><Link to="/viewbugs" className='nav'>Add a Project</Link></li>
                <li><Link to="/viewbugs" className='nav'>Add a User</Link></li>
                
            </ul> */}
            
        </div>
    );
}

export default Sidebar;