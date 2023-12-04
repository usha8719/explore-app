import React from 'react'
import './nav.css'
import logo from '../../photos/logo.svg'

const Nav = () => {
    return (
        <nav>   
            <img className="logo" src={logo} alt="Explore Around Logo"/>            
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#travelpage">Travel</a></li>
                    <li><a href="#getfeatured">Get Featured</a></li>
                    <li><a href="#contact">Contact</a></li>   
                </ul>
            </nav>
    )
}

export default Nav