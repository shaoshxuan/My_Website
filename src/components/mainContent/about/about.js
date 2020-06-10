import React from 'react';
import './about.css';

class About extends React.Component {
    render() {
        return (
            <div className="about sectionPadding" id="about">
                <div className="header">
                    <span style={{ color: 'var(--headerColor)' }}>&lt;</span> About Me <span style={{ color: 'var(--headerColor)' }}>/&gt;</span>
                </div>
                <div className="headerBreak"></div>
                <div className="aboutContent">
                    <div className="shaoDP">
                        <img src={require("../../../assets/shaoDP.png")} alt=""/>
                    </div>
                    <div className="bodyBreak"></div>
                    <div className="shaoDesc">
                        <span className="subHeader">
                            HELLO WORLD!<br/>
                            SO, WHO AM I?
                        </span>
                        <div className="bodyBreak"></div>
                        <span className="bodyText">
                            I am Shao Shxuan, an aspiring Front-End Developer. Currently an undergraduate located in Singapore, pursuing a double major in <span style={{ color: "var(--contrastColor)", fontWeight: "600" }}>Software Development</span> and <span style={{ color: "var(--contrastColor)", fontWeight: "600" }}>Cyber Security</span>.<br/>
                            Constantly researching and learning new technologies to improve myself, I believe what I'm doing is an <span style={{ color: "var(--contrastColor)", fontWeight: "600" }}>art</span>, and creativity is key, from problem solving to design and development.
                        </span>
                    </div>
                    <div className="landingBreak"></div>
                    <div className="shaoSkillsInfo">
                        <span className="subHeader">
                            Familiar Languages and Frameworks
                        </span>
                        <div className="bodyBreak"></div>
                        <div className="shaoSkills">
                            <div className="skills languages">
                                <div>[ Javascript ]</div>
                                <div>[ HTML5 ]</div>
                                <div>[ CSS3 ]</div>
                                <div>[ jQuery ]</div>
                                <div>[ Dart ]</div>
                                <div>[ Python3 ]</div>
                                <div>[ Php ]</div>
                                <div>[ MySQL ]</div>
                                <div>[ Java ]</div>
                            </div>
                            <div className="bodyBreak"></div>
                            <div className="skills frameworks">
                                <div>[ ReactJS ]</div>
                                <div>[ Flutter ]</div>
                                <div>[ GatsbyJS ]</div>
                                <div>[ VueJS ]</div>
                                <div>[ Flask ]</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;