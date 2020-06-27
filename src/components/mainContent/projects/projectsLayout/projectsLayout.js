import React from "react";
import { Link } from "gatsby";
import "./ProjectsLayout.css";

const ProjectsLayout = (props) => {
    return (
        <div className="perProjContainer">
            <div className="projPreview">
                <img src={props.projPic} alt="projPreview" />
            </div>
            <div className="projHoverDetails">
                <div className="projName">
                    {props.projName} 
                </div>
                <div className="techUsed">
                    {props.techUsed.join(" | ")}
                </div>
                <Link to={`/projects/${props.slug}`}>
                    View More
                </Link>
            </div>
        </div>
    )
}

export default ProjectsLayout;