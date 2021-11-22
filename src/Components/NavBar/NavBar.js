import React from 'react'
//import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Container, Offcanvas,Nav, NavDropdown,Form,FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
 <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand center>CSE DEPARTMENT</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Pages Routing</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link><Link to = "/">Home</Link></Nav.Link>
          <Nav.Link><Link to = "/Signup">SignUp</Link></Nav.Link>
          <Nav.Link><Link to = "/Registration">Registration</Link></Nav.Link>
          <Nav.Link><Link to = "/Information">Class Information</Link></Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
        </div>
    )
}

export default NavBar
