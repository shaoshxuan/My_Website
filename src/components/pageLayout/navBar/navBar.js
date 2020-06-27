import React from "react";
import { Link } from "gatsby";
import './navBar.css';

class NavBar extends React.Component {
    constructor() {
        super()
        this.state = {
            scrollYValue: 0,
            navBarStyle: "top",
            menuOpen: false,
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
    }

    onScroll = () => {
        if (window.pageYOffset > 0){
            if (this.state.scrollYValue > window.pageYOffset){
                this.setState((prevState) => ({
                    scrollYValue: window.pageYOffset,
                    navBarStyle: "",
                    menuOpen: false,
                }))
            } else {
                this.setState((prevState) => ({
                    scrollYValue: window.pageYOffset,
                    navBarStyle: "fadeUp",
                    menuOpen: false,
                }))
            }
        }
        else {
            this.setState((prevState) => ({
                scrollYValue: 0,
                navBarStyle: "top",
                menuOpen: false,
            }))
        }
    }

    toggleMenu = () => {
        this.setState((prevState) => ({
            ...prevState,
            menuOpen: !prevState.menuOpen,
        }))
    }

    render() {
        return (
            <>
                <div className="hamburgerContainer" onClick={this.toggleMenu} onKeyUp={this.handleKeyUp} role="button" tabIndex="0">
                    <div className={`hamburgerMenu ${this.state.menuOpen ? "open" : ""}`}></div>
                </div>
                <header className={`navBarContainer ${this.state.navBarStyle} ${this.state.menuOpen ? "open" : ""}`}>
                    <div className="navBarLayout">
                        <div className="myIcon">
                            <Link to="/"><img src={require("../../../assets/s.png")} alt="myLogo" /></Link>
                        </div>
                        <div className="navLinks">
                            <div><Link to="/">HOME</Link></div>
                            <div><Link to="/#about">ABOUT</Link></div>
                            <div><Link to="/#work">WORK</Link></div>
                            <div><Link to="/#projects">PROJECTS</Link></div>
                            <div><Link to="/#contact">CONTACT</Link></div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}


export default NavBar;