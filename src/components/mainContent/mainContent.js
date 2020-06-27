import React from "react";
import About from "./about/about";
import WorkExp from "./workExp/workExp";
import Projects from "./projects/projects";
import Contact from "./contact/contact";

const MainContent = () => {
    return (
        <>
            <About />
            <WorkExp />
            <Projects />
            <Contact />
        </>
    )
}

export default MainContent;