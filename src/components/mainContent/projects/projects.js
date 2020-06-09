import React from 'react';
import './projects.css';
import ProjectData from '../../../assets/projectData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Projects extends React.Component {
    render() {
        return (
            <div className="projects sectionPadding" id="projects">
                <div className="header">
                    <span style={{ color: 'var(--headerColor)' }}>&lt;</span> Past Projects <span style={{ color: 'var(--headerColor)' }}>/&gt;</span>
                </div>
                <div className="landingBreak"></div>
                <div className="pastProjects">
                    {ProjectData.sort((a, b) => b.id - a.id).map((data, index) => {
                        return (
                            <div key={index}>
                                <div className="landingBreak"></div>
                                <div className="projectsDone twoKContainerProj">
                                    <div className="projectImg">
                                        <div className="projLink">
                                            {data.projURL.length > 0
                                                ? <a href={data.projURL} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fas', 'link']} /></a>
                                                : <a href={false} className="privateIP">IP Privated</a>
                                            }
                                            
                                        </div>
                                        <img src={data.screenshotURL} alt="" />
                                    </div>
                                    <div className="projectSummary">
                                        <div className="projName">
                                            {data.projName}
                                        </div>
                                        <div className="projType">
                                            {data.projType}
                                        </div>
                                        <div className="projDesc">
                                            {data.projDesc.map((descData, index) => {
                                                return (
                                                    <div key={index}>{descData}<br/></div>
                                                )
                                            })}
                                        </div>
                                        <div className="subBodyBreak"></div>
                                        <div className="techLink">
                                            <div className="techUsed">
                                                {data.techUsed.map((techData, index) => {
                                                    return (
                                                        <div key={index}>{techData}</div>
                                                    )
                                                })}
                                            </div>
                                            <div className="projGit">
                                                {data.gitLink.length > 0 &&
                                                    <a href={data.gitLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Projects;