import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
    return (
        <div className="contact sectionPad" id="contact">
            <div className="contactHeader">
                <span style={{ color:"#66fcf1" }}>&lt;</span> Contact Me <span style={{ color:"#66fcf1" }}>/&gt;</span>
            </div>
            <div className="constantBreak"></div>
            <div className="contactSubHeader">
                Have a question or want to work together?
            </div>
            <div className="contactSub">
                Or just wanna say hi?
            </div>
            <div className="landingBreak"></div>
            <div className="contactBody">
                Message and connect with me via EMAIL or LINKEDIN!<br/>
                I'm looking forward!
            </div>
            <div className="landingBreak"></div>
            <div className="connectContact">
                <div><FontAwesomeIcon icon={['fas', "caret-right"]} className="glowingArrow" /></div>
                <div><a href="mailto:shaoshxuan.chua@gmail.com" rel="noreferrer noopener" target="_blank" aria-label="mailto"><FontAwesomeIcon icon={['fas', "envelope"]}/></a></div>
                <div><a href="https://www.linkedin.com/in/shaoshxuanchua/" rel="noreferrer noopener" target="_blank" aria-label="linkedin"><FontAwesomeIcon icon={['fab', "linkedin"]}/></a></div>
                <div><FontAwesomeIcon icon={['fas', "caret-left"]} className="glowingArrow" /></div>
            </div>
        </div>
    )
}

export default Contact;