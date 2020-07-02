import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar()
{
    return (
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/edit">Edit</NavLink></li>
            {/* <li><NavLink to="/aboutUs">About Us</NavLink></li> */}
            <li><NavLink to="/Counter">Counter</NavLink></li>
        </ul>
    )
}
export default Navbar 