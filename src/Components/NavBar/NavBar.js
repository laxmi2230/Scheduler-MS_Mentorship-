import React from 'react'
//import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Container, Offcanvas,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
 <Navbar bg="info" expand={false}>
  <Container fluid>
    <Navbar.Brand><h2><b><i>SCHEDULER(CSE DEPARTMENT)</i></b></h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"><h1><u>Pages Routing</u></h1></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link><Link to = "/"><h3>Home</h3></Link></Nav.Link>
          <Nav.Link><Link to = "/Information"><h3>Class Information</h3></Link></Nav.Link>
          <Nav.Link><Link to = "/Signup"><h3>SignUp For Teachers</h3></Link></Nav.Link>
          <Nav.Link><Link to = "/Registration"><h3>Registration For Students</h3></Link></Nav.Link>   
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar> 
        </div>
    )
}

export default NavBar
