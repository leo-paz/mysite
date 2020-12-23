import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

const FrontPage = () => {
    const style = {
        textAlign: 'center'
    };
    return (
        <Container 
            id="frontpage"
            className="center-container"
        >
            <p className="light-gray-desc">Hi, my name is</p>
            <h1>Leo Paz.</h1>
            <p>I'm a software engineer based in Ottawa, Ontario who has spent
                most of their time building backend systems with a new found interest
                in web development.
            </p>
            <a href="mailto:omarleopaz@hotmail.com">Get in touch</a>
            
        </Container>
    )
}

export default FrontPage;