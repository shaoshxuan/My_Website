import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => {
    return (
        <Helmet 
            title={`${title} | Shao Shxuan | Junior Developer`}
        >
            <link rel="icon" href={require("../assets/s.ico")} />
        </Helmet>
    )
}

export default Head;