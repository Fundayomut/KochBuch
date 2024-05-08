import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
  return (
    <div className="navbardiv">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="Breakfast">Breakfast</Nav.Link>
            <Nav.Link href="Dinner">Dinner</Nav.Link>
            <Nav.Link href="Snack">Snack</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
