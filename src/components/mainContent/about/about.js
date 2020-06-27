import React from "react";
import "./about.css";

const About = () => {
    const languages = ["Javascript", "HTML5", "CSS3", "jQuery", "Dart", "Python", "Php", "Java", "MySQL"];
    const frameworks = ["ReactJS", "Flutter", "GatsbyJS", "VueJS", "Flask"];
    return (
        <>
            <div className="topSepBar"></div>
            <div className="about sectionPad" id="about">
                <div className="sectionHeader">
                    <span style={{ color:"#45a29e" }}>&lt;</span> About <span style={{ color:"#45a29e" }}>/&gt;</span>
                </div>
                <div className="aboutInfo">
                    <div className="myDP">
                        <img src={require("../../../assets/shaoDP.png")} alt="shaoDP" />
                    </div>
                    <div className="subHeader">
                        HELLO WORLD!<br/>
                        SO, WHO AM I?
                    </div>
<<<<<<< Updated upstream
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
=======
                    <div className="aboutMeContent">
                        I am Shao Shxuan, an aspiring Front-End Developer. Currently an undergraduate located in Singapore, pursuing a double major in <span style={{ color: "#e41376", fontWeight: "600" }}>Software Development</span> and <span style={{ color: "#e41376", fontWeight: "600" }}>Cyber Security</span>.<br/>
                        Constantly researching and learning new technologies to improve myself, I believe what I'm doing is an <span style={{ color: "#e41376", fontWeight: "600" }}>art</span>. From problem solving to design and development, creativity is key!
                    </div>
                    <div className="constantBreak"></div>
                    <div className="subHeader">
                        Familiar Languages and Frameworks
                    </div>
                    
                    <div className="languages">
                        {languages.map((language, index) => {
                            return (
                                <div className="language" key={index}>
                                    [ {language} ]
                                </div>
                            )
                        })}
                    </div>
                    <div style={{ paddingBottom: "0.5rem" }}></div>
                    <div className="frameworks">
                        {frameworks.map((framework, index) => {
                            return (
                                <div className="framework" key={index}>
                                    [ {framework} ]
                                </div>
                            )
                        })}
>>>>>>> Stashed changes
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;