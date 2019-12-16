import React from 'react'
import {Nav, NavDropdown, Navbar, Row, Col} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import Countdown from 'react-countdown-now';

export default function NavBar(props) {
  const history = useHistory()
  const logOut = async () => {
    const resp = await fetch("https://127.0.0.1:5000/logout", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    });
    if (resp.ok) {
      localStorage.clear("token");
      props.setCurrentUser(null);
      history.push("/");
    } else {
      alert("Something wrong log out again");
    }
  };

  return (
    <Navbar className="top-nav-section" expand="lg">
      <Row>
        <Col sm className="social">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-google-plus-g"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </Col>
        <Col xs={6} className="counter-top">
          <h5>Upcoming Event:</h5>
						<a href="#" class="top-readmore hidden-sm">readmore</a>
        </Col>
        <Col>
        </Col>
      </Row>
      {/* <Navbar.Brand href="#home">
      <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top" />{' '}
      The Cancer Voice
      </Navbar.Brand> */}
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-sm-2">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <Nav.Link href="#link">Event</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
          <Nav.Link href="#link">Donate</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
        <Form inline>
        <Button variant="outline-success">Send Donation</Button>
      </Navbar.Collapse> */}
    </Navbar>
  )
}
