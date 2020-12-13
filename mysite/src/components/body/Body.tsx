import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import AboutMe from '../aboutme/AboutMe';
import FrontPage from '../frontpage/FrontPage';

const Body = () => {
    return (
        <Container fluid id="body">
            <FrontPage></FrontPage>
            <AboutMe></AboutMe>
        </Container>
    )
}

export default Body;