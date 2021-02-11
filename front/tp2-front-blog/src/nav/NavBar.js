import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'




// function NavBar() {
const NavBar = ({ history }) => {

  return (


      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">TP2 BLOG</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/articles">Liste Articles</Nav.Link>
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>

  );
}

export default NavBar;