import React from "react";
import "./landing.css";
import ParticlesJS from "./particles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Landing = () => {
    return (
        <>
            <div className="landing" id="home">
                <ParticlesJS/>
                <div className="landingContent">
                    <div className="iBuild">
                        I DESIGN AND BUILD
                    </div>
                    <div className="iBuildWhat">
                        <span style={{ color: "white" }}>&mdash;</span> WEBSITES <span style={{ color: "white" }}>&mdash;</span><br/>
                        <span style={{ color: "white" }}>&mdash;</span> MOBILE APPS <span style={{ color: "white" }}>&mdash;</span>
                    </div>
                    <div className="landingBreak"></div>
                    <div className="landingWhoAmI">
                        I am <span className="landingName">Shao Shxuan</span>, a junior developer located in Singapore.<br/>
                        With passion in design and development, I strive to bring your web and mobile app ideas to life!
                    </div>
                    <div className="landingBreak"></div>
                    <div className="profileLinks">
                        <a href="https://www.linkedin.com/in/shaoshxuanchua/" target="_blank" rel="noopener noreferrer" aria-label="linkedin"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                        <a href="https://github.com/shaoshxuan" target="_blank" rel="noopener noreferrer" aria-label="github"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                        <a href="https://codepen.io/shaoshxuan" target="_blank" rel="noopener noreferrer" aria-label="codepen"><FontAwesomeIcon icon={['fab', 'codepen']} /></a>
                        <a href="https://www.instagram.com/shaoshxuan/" target="_blank" rel="noopener noreferrer" aria-label="instagram"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                    </div>
                    <div className="landingBreak"></div>
                    <div className="landingQuote">
                        "Perfection is no small thing, but it is made up of small things"
                    </div>
                    <div className="startView">
                        <a href="#about"><FontAwesomeIcon icon={['fas', 'angle-double-down']} aria-label="#about" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;