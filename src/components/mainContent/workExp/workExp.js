import React from 'react';
import './workExp.css';
import WorkExpData from '../../../assets/workExpData.json';

class WorkExp extends React.Component {
    render() {
        return (
            <div className="workExp sectionPadding" id="work">
                <div className="header">
                    <span style={{ color: 'var(--headerColor)' }}>&lt;</span> Work Experience <span style={{ color: 'var(--headerColor)' }}>/&gt;</span>
                </div>
                <div className="landingBreak"></div>
                <div className="experiences">
                    {WorkExpData.sort((a, b) => b.id - a.id).map((data, index) => {
                        return (
                            <div key={index}>
                                <div className="landingBreak"></div>
                                <div className="workExperience twoKContainerWork">
                                    <div className="workLogoSummary">
                                        <div className="logoContainer">
                                            <a href={data.companyURL} target="_blank" rel="noopener noreferrer">
                                                <div className="compLogo">
                                                    <img src={data.logoURL} alt=""/>
                                                </div>
                                            </a>
                                        </div>
                                    
                                        <div className="workSummary">
                                            <div className="companyName">
                                                {data.company}
                                            </div>
                                            <div className="workRole">
                                                {data.role}
                                            </div>
                                            <div className="workPeriod">
                                                {data.date}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="workDesc">
                                        {data.desc.map((descData, index) => {
                                            return (
                                                <div key={index}>{descData}<br/><br/></div>
                                            )
                                        })}
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

export default WorkExp;