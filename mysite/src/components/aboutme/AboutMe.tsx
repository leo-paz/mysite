import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

const AboutMe = () => {
    return (
        <Container
            id="aboutme" 
            className="center-container"
        >
            <h1>About Me</h1>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <Image fluid roundedCircle src="./cropped_dp.jpg"/>
                </Col>
                <Col lg={9} md={6} sm={12}>
                    <p>I enjoy learning new technologies and building functional but creative 
                        software products. I just recently got into learning front end so please excuse
                        me for some UI working funny (especially on mobile) 😓 I will be getting better! 
                    </p>
                    <p> I've been working for Phreesia for 16 months as an intern and now part time as I finish
                        my last year of software engineering at Carleton University. 
                    </p>
                    <p> Currently fixated on machine learning as I wrap up my fourth year project centered
                        on a computer vision model that can detect accessibility issues given a google
                        streetview image.
                    </p>
                </Col>
            </Row>
            <Row id="tech-about-me">
                <Col lg={12} sm={12}><h5>Some technologies I have been working with recently:</h5></Col>
            </Row>
            <Row >
                <Col lg={4} md={4} sm={12}>
                <ul>
                    <li>React</li>
                    <li>Angular</li>
                    <li>GraphQL</li>
                    <li>AWS S3, Route53, Lambda</li>
                </ul>
                </Col>
                <Col lg={4} md={4} sm={12}>
                <ul>
                    <li>Detectron2</li>
                    <li>.NET</li>
                    <li>DynamoDB</li>
                    <li>Docker</li>
                </ul>
                </Col>
                <Col lg={4} md={4} sm={12}>
                <ul>
                    <li>MySQL</li>
                    <li>GatsbyJS</li>
                    <li>MongoDB</li>
                    <li>Weights&Biases</li>
                </ul>
                </Col>
            </Row>
            
        </Container>
    )
}

export default AboutMe;