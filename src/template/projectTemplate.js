import React from "react";
import { graphql, Link } from 'gatsby';
import PageLayout from '../components/pageLayout/pageLayout.js';
import Head from '../components/head.js';
import "./ProjectTemplate.css";

export const query = graphql`
    query (
        $slug: String!
    ) {
        contentfulEmbarkedProjects (
            slug: {
                eq: $slug
            }
        ) {
            projectLink
            projectName
            slug
            projectYear (formatString: "YYYY")
            projectType
            projectPreview {
                file {
                    url
                }
            }
            staticSitePreview {
                file {
                    url
                }
            }
            description {
                description
            }
        }
    }
`

const ProjectTemplate = (props) => {
    const propsCleaned = props.data.contentfulEmbarkedProjects;
    return (
        <>
        <Head title="Project View"/>
        <PageLayout>
            <div className="perProjectInfo">
                <div className="projInfoContainer">
                    <div className="projSummary">
                        <div className="projYear">
                            {propsCleaned.projectYear}
                        </div>
                        <div className="paraBreak"></div>
                        <div className="projTitle">
                            {propsCleaned.projectName}
                        </div>
                        <div className="paraBreak"></div>
                        <div className="projType">
                            {propsCleaned.projectType}
                        </div>
                        <div className="constantBreak"></div>
                        <hr className="projBreaker"/>
                        <div className="constantBreak"></div>
                        <div className="projBGHeader">
                            Project Background
                        </div>
                        <div className="paraBreak"></div>
                        <div className="projDesc">
                            <div dangerouslySetInnerHTML={{ __html: (propsCleaned.description.description).split("\n").join("<div class='paraBreak'></div>")}}></div>
                        </div>
                        {propsCleaned.projectLink === null 
                            ? ""
                            :   <>
                                <div className="constantBreak"></div>
                                <div className="projLink">
                                    View the project here: <a href={propsCleaned.projectLink} target="_blank" rel="noopener noreferrer" aria-label="projectLink">{propsCleaned.projectName}</a>
                                </div>
                                </>
                        }
                        
                    </div>
                    {propsCleaned.staticSitePreview === null 
                        ? "" 
                        :   <>
                            <div className="constantBreak"></div>
                            <div className="projStaticImg">
                                Static Previews
                                <div className="constantBreak"></div>
                                {propsCleaned.staticSitePreview.map((imgFile, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={imgFile.file.url} alt="staticPreviewImg" />
                                        </div>
                                    )
                                })}
                            </div>
                            </>
                    }
                    <div className="viewMoreProj">
                        <Link to="/#projects">View More Projects</Link>
                    </div>
                </div>
            </div>
        </PageLayout>
        </>
    )
}

export default ProjectTemplate;