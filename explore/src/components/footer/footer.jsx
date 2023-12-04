import React from 'react'
import './footer.css'
import whitelogo from '../../photos/white-logo.svg'

const Footer = () => {
    return (
        <footer class="footer">
           <img className="footer-logo" src={whitelogo} alt="Explore Around logo"/>

            <ul className="navlinks">
                <li><a href="#about">About</a></li>
                <li><a href="#travelpage">Travel</a></li>
                <li><a href="#getfeatured">Get Featured</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer-copyright">
                <p>© 2023 Explore Around</p>
            </div>
        </footer>
    )
}

export default Footer