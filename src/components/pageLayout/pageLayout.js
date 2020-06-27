import React from "react";
import NavBar from "./navBar/navBar";
import Footer from "./footer/footer";

const PageLayout = (props) => {
    return (
        <>
            <NavBar />
                { props.children }
            <Footer />
        </>
    )
}

export default PageLayout;