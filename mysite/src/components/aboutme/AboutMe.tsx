import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

const AboutMe = () => {
    return (
        <Container fluid="lg" id="aboutme" className="force-back">
            <h2>About Me</h2>
            <hr></hr>
            <Row>
            <Col lg={6} md={6} sm={12}><Image fluid roundedCircle src="./cropped_dp.jpg"/></Col>
                <Col lg={6} md={6} sm={12}>
                    <p>Hi! I'm Leo, a software engineer based in Ottawa, Ontario.</p>
                    <p>I enjoy learning new technologies and building functional but creative 
                        software products. I just recently got into learning front end so please excuse
                        me for some UI working funny (especially on mobile) 😓 I will be getting better! 
                    </p>
                    <p> I've been working for Phreesia for 16 months as an intern and now part time as I finish
                        my last year of software engineering at Carleton University. 
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-lg-center">
                <Col lg={12} sm={12}><h5>Some technologies I have been working with recently:</h5></Col>
            </Row>
            <Row className="justify-content-lg-center">
                <Col lg={4} md={4} sm={12}>
                <ul>
                    <li>React</li>
                    <li>Angular</li>
                    <li>PyTorch</li>
                    <li>AWS</li>
                </ul>
                </Col>
                <Col lg={4} md={4} sm={12}>
                <ul>
                    <li>Detectron2</li>
                    <li>NET Core</li>
                    <li>ASPNET Core</li>
                    <li>NET Framework</li>
                    <li>MongoDB</li>
                </ul>
                </Col>
                <Col lg={4} md={4} sm={12}>
                <ul>
                    <li>MySQL</li>
                    <li>Google DeepLearning VM</li>
                    <li>Detectron2</li>
                    <li>NET Core</li>
                </ul>
                </Col>
            </Row>
            
        </Container>
    )
}

export default AboutMe;