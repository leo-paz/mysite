import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import AboutMe from '../aboutme/AboutMe';
import FrontPage from '../frontpage/FrontPage';
import Cardlist from '../Card/CardList';

const Body = () => {
    return (
        <div id="body">
            <FrontPage/>
            <AboutMe/>
            <Cardlist/>
        </div>
    )
}

export default Body;