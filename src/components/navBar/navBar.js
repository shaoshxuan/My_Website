import React from 'react';
import './navBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="navBar">
                <div className="hamburgerContainer">
                        <div className="hamburgerMenu"></div>
                </div>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#projects">Projects</a></li>
                        {/* <li><a href="#extras">Extras</a></li> */}
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar;