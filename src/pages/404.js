import React from "react";
import { Link } from "gatsby";
import Head from '../components/head.js';
import "./404styles/404.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

const NotFoundPage = () => {
    return (
        <>
            <Head title="404"/>
            <div className="notFound">
                <img src={require("../assets/404BG.jpg")} alt="404BG"/>
                <div className="notFoundTextContainer">
                    <div className="errorCode">
                        404, Page Not Found!
                    </div>
                    <div className="compassText">
                        This compass will show you the right way!
                    </div>
                    <Link to="/">
                        <FontAwesomeIcon icon={ faCompass } className="FACompass" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NotFoundPage;
