import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./projects.css";
import ProjectsLayout from "./projectsLayout/projectsLayout";

const Projects = () => {
    const allProjects = useStaticQuery(graphql`
        query {
            allContentfulEmbarkedProjects (
                sort:{
                    fields: projectYear,
                    order: DESC
                },
            ){
                edges {
                    node {
                        projectName
                        slug
                        projectYear (formatString: "YYYY")
                        projectPreview {
                            file {
                                url
                            }
                        }
                        techUsed {
                            techUsed
                        }
                    }
                }
            }
        }
    `)
    return (
        <div className="projects sectionPad" id="projects">
            <div className="sectionHeader">
                <span style={{ color:"#45a29e" }}>&lt;</span> Embarked Projects <span style={{ color:"#45a29e" }}>/&gt;</span>
            </div>
            <div className="constantBreak"></div>
            <div className="embarkedProjectsContainer">
                {allProjects.allContentfulEmbarkedProjects.edges.map((projects, index) => {
                    return (
                        <ProjectsLayout 
                            key={index}
                            projName={projects.node.projectName}
                            slug={projects.node.slug}
                            projYear={projects.node.projectYear}
                            projPic={projects.node.projectPreview.file.url}
                            techUsed={projects.node.techUsed.techUsed}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;