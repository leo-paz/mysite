import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import AboutMe from '../aboutme/AboutMe';

const Body = () => {
    return (
        <Container fluid className="force-back">
            <Row>
                <Col>
                    <AboutMe></AboutMe>
                </Col>
            </Row>
        </Container>
    )
}

export default Body;