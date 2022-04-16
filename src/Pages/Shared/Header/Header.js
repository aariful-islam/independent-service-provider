import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" >
  <Container className='p-4'>
  <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className='fw-bold' href="home#services">Services</Nav.Link>
      <Nav.Link className='fw-bold ' as={Link} to="/blogs">Blogs</Nav.Link>
      <Nav.Link className='fw-bold ' as={Link} to="/aboutme">About Me</Nav.Link>
      
      
    </Nav>
    <Nav>
      <Nav.Link className='fw-bold ' as={Link} to="/login">Log In</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;