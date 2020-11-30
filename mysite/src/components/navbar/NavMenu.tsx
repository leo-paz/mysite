import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/esm/Nav';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

const NavMenu = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-column">
                <Nav.Link href="#home"><span role="img" aria-label="about me">🙋</span></Nav.Link>
                <Nav.Link href="#link"><span role="img" aria-label="work">💻</span></Nav.Link>
                <Nav.Link href="#link"><span role="img" aria-label="work">📰</span></Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1"><span role="img" aria-label="work">💻</span></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"><span role="img" aria-label="work">💻</span></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"><span role="img" aria-label="work">💻</span></NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavMenu;