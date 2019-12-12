import React from 'react'
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap"
import { useHistory } from 'react-router-dom'
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
    <div class="social">
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-google-plus-g"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">The Cancer Voice</Navbar.Brand>
        <Nav className="mr-auto">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-google-plus-g"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
          <div onClick={() => logOut()}>log out</div>
        </Form>

      </Navbar>

    </div>
  )
}
