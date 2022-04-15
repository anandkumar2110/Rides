import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = (props) => {
    
    return (
    <>
        <nav>
            <div className="top-nav">
                <h1>
                    Edvora 
                </h1>
                <div className="user-div">
                    <h1>
                        {props.name}
                    </h1>
                    <div className="user-img">

                    </div>
                </div>
            </div>
            <NavLink exact className={(activeData) => (activeData.isActive ? 'active-link':'navlink')} to='/nearest'>
                Nearest Rides
            </NavLink>
            <NavLink exact className={(activeData) => (activeData.isActive ? 'active-link':'navlink')} to='/upcoming'>
                Upcoming Rides
            </NavLink>
            <NavLink exact className={(activeData) => (activeData.isActive ? 'active-link':'navlink')} to='/past'>
                Past Rides
            </NavLink>
        </nav>
    </>
    );
}

export default Navbar ;