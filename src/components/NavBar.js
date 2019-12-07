import React from 'react'
import {Nav, Navbar, Form, FormControl, Button} from "react-bootstrap"
import {useHistory} from 'react-router-dom'
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
          alert("something wrong log out again");
        }
      };
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                    <div onClick={()=>logOut()}>log out</div>
                </Form>
                
            </Navbar>
        </div>
    )
}
