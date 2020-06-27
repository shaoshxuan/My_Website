import React from "react";
import "./workExpLayout.css";

const WorkExpLayout = (props) => {
    return (
        <div className="perWorkExp">
            <div className="workOverview">
                <a href={props.companyLink}><div className="companyLogo">
                    <img src={props.companyLogo} alt="companyLogo"/>
                </div></a>
                <div className="workSummary">
                    <div className="companyName">
                        {props.companyName}
                    </div>
                    <div className="workRole">
                        {props.workRole}
                    </div>
                    <div className="workPeriod">
                        {props.dateFrom} - {props.dateTill == null ? "Present" : props.dateTill}
                    </div>
                </div>
            </div>
            <div className="workDesc">
                <div dangerouslySetInnerHTML={{ __html: (props.desc).split("\n").join("<div class='paraBreak'></div>")}}></div>
            </div>
        </div>
    )
}

export default WorkExpLayout;