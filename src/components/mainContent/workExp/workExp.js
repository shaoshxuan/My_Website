import React from "react";
import { graphql, useStaticQuery} from 'gatsby';
import "./workExp.css";
import WorkExpLayout from "./workExpLayout/workExpLayout";

const WorkExp = () => {
    const allWorkExp = useStaticQuery(graphql`
        query {
            allContentfulWorkExperience (
                sort:{
                fields: dateTill,
                order: DESC
                }
            ){
                edges {
                    node {
                        companyLogo {
                            file {
                                url
                            }
                        }
                        companyLink
                        companyName
                        workRole
                        dateFrom (formatString:"MMMM YYYY")
                        dateTill (formatString:"MMMM YYYY")
                        workDescription {
                            workDescription
                        }
                    }
                }
            }
        }
    `)

    return (
        <div className="workExp sectionPad" id="work">
            <div className="sectionHeader">
                <span style={{ color:"#45a29e" }}>&lt;</span> Work Experience <span style={{ color:"#45a29e" }}>/&gt;</span>
            </div>
            <div className="worksContainer">
            {allWorkExp.allContentfulWorkExperience.edges.map((workExp, index) => {
                return (
                    <WorkExpLayout 
                        key={index}
                        companyLink={workExp.node.companyLink}
                        companyLogo={workExp.node.companyLogo.file.url}
                        companyName={workExp.node.companyName}
                        workRole={workExp.node.workRole}
                        dateFrom={workExp.node.dateFrom}
                        dateTill={workExp.node.dateTill}
                        desc={workExp.node.workDescription.workDescription}
                    />
                )
            })}
            </div>
        </div>
    )
}

export default WorkExp;