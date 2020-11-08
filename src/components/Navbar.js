import React from 'react'
import './Navbar.css'
import prsn from '../assets/person1.jpg'

const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo"><h3>LOGO</h3></div>
            <div><ul><li>Dashboard</li>
            <li>Find Experts</li>
            <li>Discussion</li></ul></div>
            <div className="icons">
                <div><i class="fa fa-bell-o" aria-hidden="true"></i></div>
                <div><i class="fa fa-commenting-o" aria-hidden="true"></i></div>
                <div><img src={prsn} height="25px" width="25px"alt="user" style={{borderRadius:'50%'}}></img> <i class="fa fa-angle-down" aria-hidden="true"></i></div>
                <div></div>
            </div>
            
        </div>
    )
}

export default Navbar
