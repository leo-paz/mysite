import React from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavMenu = () => {
    return (
        <Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-column">
                <Nav.Link href="#home"><span className="emoji item1" role="img" aria-label="about me">🧑🏻</span></Nav.Link>
                <Nav.Link href="#link"><span className="emoji item2" role="img" aria-label="work"> 👨🏻‍💻 </span></Nav.Link>
                <Nav.Link href="#link"><span className="emoji item3" role="img" aria-label="resume">📄</span></Nav.Link>
                <Nav.Link href="#link"><span className="emoji item4" role="img" aria-label="socials">💬</span></Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1"><span role="img" aria-label="work">💻</span></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"><span role="img" aria-label="work">💻</span></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"><span role="img" aria-label="work">💻</span></NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavMenu;