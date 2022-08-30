// import React from 'react'
import React from "react";
import './Nav.css';
import { Navbar, Nav } from "react-bootstrap";



function Navs (){
    return(
      

    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" className="logo">
            <h2 className="text-primary">My Portfolio</h2>
            <span className="myspan">Developed by Mohammed Ebrahiim</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
            <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
        
        </Navbar.Collapse>
    </Navbar>
    )
}

export default Navs;