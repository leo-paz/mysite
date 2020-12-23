import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import AboutMe from '../aboutme/AboutMe';
import FrontPage from '../frontpage/FrontPage';
import Cardlist from '../Card/CardList';

const Body = () => {
    return (
        <Container fluid id="body">
            <FrontPage/>
            <AboutMe/>
            <Cardlist/>
        </Container>
    )
}

export default Body;