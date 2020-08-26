import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function HeaderBootstrap() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">James Boone</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/aboutme">About Me</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                        <NavDropdown title="Featured on..." id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">LinkedIn</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another Social Media</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Another one</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default HeaderBootstrap
